const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT) || 5500;
const ROOT = __dirname;
const LIVE_RELOAD_ROUTE = '/__events';
const PRESENCE_ROUTE = '/__presence';
const PRESENCE_LEAVE_ROUTE = `${PRESENCE_ROUTE}/leave`;
const MULTI_ROUTE = '/__multi';
const MAX_MULTI_HISTORY = 800;
const reloadClients = new Set();
const presenceClients = new Set();
const presenceUsers = new Map();
const multiClients = new Set();
const multiEventHistory = [];
const clearedCanvasTimestamps = new Map();
const watchableExtensions = new Set(['.html', '.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.mp3', '.m4a', '.wav', '.ogg', '.mp4']);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.m4a': 'audio/mp4',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
  '.mp4': 'video/mp4',
};

function getFilePath(requestUrl) {
  const cleanUrl = decodeURIComponent((requestUrl || '/').split('?')[0]);
  const relativePath = cleanUrl === '/' ? '/index.html' : cleanUrl;
  const normalizedPath = path.normalize(relativePath).replace(/^(\.\.[\\/])+/, '');
  return path.join(ROOT, normalizedPath);
}

function sendText(res, statusCode, message) {
  res.writeHead(statusCode, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': 'no-cache',
  });
  res.end(message);
}

function streamStaticFile(req, res, filePath, stats) {
  const extension = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[extension] || 'application/octet-stream';
  const rangeHeader = req.headers.range;

  if (rangeHeader) {
    const match = /bytes=(\d*)-(\d*)/.exec(rangeHeader);
    if (!match) {
      res.writeHead(416, {
        'Content-Range': `bytes */${stats.size}`,
        'Cache-Control': 'no-cache',
      });
      res.end();
      return;
    }

    const start = match[1] ? Number(match[1]) : 0;
    const end = match[2] ? Number(match[2]) : stats.size - 1;

    if (!Number.isFinite(start) || !Number.isFinite(end) || start < 0 || end >= stats.size || start > end) {
      res.writeHead(416, {
        'Content-Range': `bytes */${stats.size}`,
        'Cache-Control': 'no-cache',
      });
      res.end();
      return;
    }

    res.writeHead(206, {
      'Content-Type': contentType,
      'Content-Length': end - start + 1,
      'Content-Range': `bytes ${start}-${end}/${stats.size}`,
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'no-cache',
    });

    fs.createReadStream(filePath, { start, end }).pipe(res);
    return;
  }

  res.writeHead(200, {
    'Content-Type': contentType,
    'Content-Length': stats.size,
    'Accept-Ranges': 'bytes',
    'Cache-Control': 'no-cache',
  });

  fs.createReadStream(filePath).pipe(res);
}

function attachLiveReload(html) {
  const script = `
<script>
(() => {
  if (window.__sabsabLiveReload) {
    return;
  }
  window.__sabsabLiveReload = true;
  const source = new EventSource('${LIVE_RELOAD_ROUTE}');
  source.onmessage = (event) => {
    try {
      const payload = JSON.parse(event.data);
      if (payload.type === 'reload') {
        window.location.reload();
      }
    } catch (error) {
      window.location.reload();
    }
  };
})();
</script>`;

  if (html.includes('</body>')) {
    return html.replace('</body>', `${script}\n</body>`);
  }

  return html + script;
}

function registerLiveReloadClient(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
  });
  res.write('\n');
  reloadClients.add(res);

  req.on('close', () => {
    reloadClients.delete(res);
  });
}

function broadcastReload(changedFile) {
  const payload = `data: ${JSON.stringify({ type: 'reload', file: changedFile })}\n\n`;
  for (const client of reloadClients) {
    client.write(payload);
  }
}

function writeSse(res, payload) {
  res.write(`data: ${JSON.stringify(payload)}\n\n`);
}

function broadcastPresence() {
  const users = [...presenceUsers.entries()]
    .map(([clientId, entry]) => ({
      id: clientId,
      clientId,
      name: entry?.name || '',
    }))
    .filter((entry) => entry.name)
    .sort((a, b) => a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' }));

  for (const client of presenceClients) {
    writeSse(client, { type: 'presence', users });
  }
}

function removePresenceClient(clientId, forceRemove = false) {
  const safeClientId = String(clientId || '').trim();
  if (!safeClientId) return;

  const currentEntry = presenceUsers.get(safeClientId);
  if (!currentEntry) {
    broadcastPresence();
    return;
  }

  if (forceRemove || currentEntry.count <= 1) {
    presenceUsers.delete(safeClientId);
  } else {
    presenceUsers.set(safeClientId, {
      ...currentEntry,
      count: Math.max(0, currentEntry.count - 1),
    });
  }

  broadcastPresence();
}

function registerPresenceClient(req, res) {
  const requestUrl = new URL(req.url || PRESENCE_ROUTE, `http://${req.headers.host || `localhost:${PORT}`}`);
  const clientId = (requestUrl.searchParams.get('clientId') || '').trim();
  const safeName = (requestUrl.searchParams.get('name') || '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 20);

  if (!clientId || !safeName) {
    sendText(res, 400, 'Pseudo ou identifiant manquant.');
    return;
  }

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
  });
  res.write('\n');

  const previousEntry = presenceUsers.get(clientId) || { name: safeName, count: 0 };
  presenceUsers.set(clientId, {
    name: safeName,
    count: previousEntry.count + 1,
  });

  presenceClients.add(res);
  broadcastPresence();

  req.on('close', () => {
    presenceClients.delete(res);
    removePresenceClient(clientId);
  });
}

function sanitizePoint(point) {
  if (!point || typeof point !== 'object') return null;
  const x = Number(point.x);
  const y = Number(point.y);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
  return {
    x: Math.max(0, Math.min(1, Number(x.toFixed(4)))),
    y: Math.max(0, Math.min(1, Number(y.toFixed(4)))),
  };
}

function sanitizeMultiPayload(payload) {
  if (!payload || typeof payload !== 'object') return null;

  const type = String(payload.type || '').trim();
  if (!type) return null;

  const eventPayload = {
    id: String(payload.id || `multi-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`),
    type,
    room: String(payload.room || 'sabsab-multi').trim().slice(0, 80),
    name: String(payload.name || 'Invité').trim().slice(0, 20),
    sessionId: String(payload.sessionId || '').trim().slice(0, 120),
    ownerSessionId: String(payload.ownerSessionId || payload.sessionId || '').trim().slice(0, 120),
    ts: Number(payload.ts || Date.now()),
  };

  if (typeof payload.noteId === 'string') {
    eventPayload.noteId = payload.noteId.trim().slice(0, 40);
  }
  if (typeof payload.text === 'string') {
    eventPayload.text = payload.text.trim().slice(0, 240);
  }
  if (typeof payload.color === 'string') {
    eventPayload.color = payload.color.trim().slice(0, 20);
  }
  if (Number.isFinite(Number(payload.size))) {
    eventPayload.size = Number(payload.size);
  }
  if (Array.isArray(payload.points)) {
    eventPayload.points = payload.points.map(sanitizePoint).filter(Boolean).slice(0, 80);
  }

  return eventPayload;
}

function rememberMultiEvent(eventPayload) {
  const ownerSessionId = String(eventPayload.ownerSessionId || eventPayload.sessionId || '').trim();
  const eventTs = Number(eventPayload.ts || Date.now());

  if ((eventPayload.type === 'draw-segment' || eventPayload.type === 'draw-stroke') && ownerSessionId) {
    const clearedAt = Number(clearedCanvasTimestamps.get(ownerSessionId) || 0);
    if (clearedAt && eventTs <= clearedAt) {
      return false;
    }
  }

  if (eventPayload.type === 'clear-own-canvas' && ownerSessionId) {
    clearedCanvasTimestamps.set(ownerSessionId, Math.max(Number(clearedCanvasTimestamps.get(ownerSessionId) || 0), eventTs));

    for (let index = multiEventHistory.length - 1; index >= 0; index -= 1) {
      const entry = multiEventHistory[index];
      if (!entry || entry.ownerSessionId !== ownerSessionId) continue;
      if (entry.type === 'draw-segment' || entry.type === 'draw-stroke') {
        multiEventHistory.splice(index, 1);
      }
    }
  }

  if (eventPayload.type === 'music-note') {
    return true;
  }

  multiEventHistory.push(eventPayload);
  if (multiEventHistory.length > MAX_MULTI_HISTORY) {
    multiEventHistory.splice(0, multiEventHistory.length - MAX_MULTI_HISTORY);
  }

  return true;
}

function registerMultiClient(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
  });
  res.write('\n');

  multiClients.add(res);
  writeSse(res, { type: 'multi-ready', ok: true, events: multiEventHistory.length });
  multiEventHistory.forEach((entry) => writeSse(res, entry));

  req.on('close', () => {
    multiClients.delete(res);
  });
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > 1024 * 1024) {
        reject(new Error('Payload trop volumineux.'));
        req.destroy();
      }
    });
    req.on('end', () => resolve(raw));
    req.on('error', reject);
  });
}

async function handleMultiPublish(req, res) {
  try {
    const rawBody = await readRequestBody(req);
    const parsedBody = rawBody ? JSON.parse(rawBody) : null;
    const eventPayload = sanitizeMultiPayload(parsedBody);

    if (!eventPayload) {
      sendText(res, 400, 'Événement multi invalide.');
      return;
    }

    if (rememberMultiEvent(eventPayload)) {
      multiClients.forEach((client) => writeSse(client, eventPayload));
    }
    res.writeHead(202, {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-cache',
    });
    res.end(JSON.stringify({ ok: true, id: eventPayload.id }));
  } catch (error) {
    sendText(res, 500, error?.message || 'Impossible de publier l\'événement.');
  }
}

async function handlePresenceLeave(req, res) {
  try {
    const requestUrl = new URL(req.url || PRESENCE_LEAVE_ROUTE, `http://${req.headers.host || `localhost:${PORT}`}`);
    const rawBody = await readRequestBody(req);
    let parsedBody = null;

    if (rawBody) {
      try {
        parsedBody = JSON.parse(rawBody);
      } catch {
        parsedBody = null;
      }
    }

    const clientId = String(parsedBody?.clientId || requestUrl.searchParams.get('clientId') || '').trim();
    if (!clientId) {
      sendText(res, 400, 'Identifiant manquant.');
      return;
    }

    removePresenceClient(clientId, true);
    res.writeHead(202, {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-cache',
    });
    res.end(JSON.stringify({ ok: true, clientId }));
  } catch (error) {
    sendText(res, 500, error?.message || 'Impossible de fermer la présence.');
  }
}

function shouldTriggerReload(filename) {
  if (!filename) {
    return false;
  }

  if (filename.includes('.git') || filename.includes('node_modules')) {
    return false;
  }

  return watchableExtensions.has(path.extname(filename).toLowerCase());
}

const server = http.createServer(async (req, res) => {
  if ((req.url || '').startsWith(LIVE_RELOAD_ROUTE)) {
    registerLiveReloadClient(req, res);
    return;
  }

  if ((req.method || 'GET').toUpperCase() === 'POST' && (req.url || '').startsWith(PRESENCE_LEAVE_ROUTE)) {
    await handlePresenceLeave(req, res);
    return;
  }

  if ((req.method || 'GET').toUpperCase() === 'GET' && (req.url || '').startsWith(PRESENCE_ROUTE)) {
    registerPresenceClient(req, res);
    return;
  }

  if ((req.method || 'GET').toUpperCase() === 'GET' && (req.url || '').startsWith(MULTI_ROUTE)) {
    registerMultiClient(req, res);
    return;
  }

  if ((req.method || 'GET').toUpperCase() === 'POST' && (req.url || '').startsWith(`${MULTI_ROUTE}/publish`)) {
    await handleMultiPublish(req, res);
    return;
  }

  const requestedPath = getFilePath(req.url);

  fs.stat(requestedPath, (statError, stats) => {
    if (statError) {
      sendText(res, 404, 'Fichier introuvable.');
      return;
    }

    const filePath = stats.isDirectory() ? path.join(requestedPath, 'index.html') : requestedPath;

    const extension = path.extname(filePath).toLowerCase();
    if (extension !== '.html') {
      streamStaticFile(req, res, filePath, stats.isDirectory() ? null : stats);
      return;
    }

    fs.readFile(filePath, (readError, fileContent) => {
      if (readError) {
        sendText(res, 500, 'Erreur pendant la lecture du fichier.');
        return;
      }

      const responseBody = Buffer.from(attachLiveReload(fileContent.toString('utf8')), 'utf8');
      res.writeHead(200, {
        'Content-Type': MIME_TYPES[extension] || 'application/octet-stream',
        'Content-Length': responseBody.length,
        'Cache-Control': 'no-cache',
      });
      res.end(responseBody);
    });
  });
});

try {
  fs.watch(ROOT, { recursive: true }, (_eventType, filename) => {
    if (!shouldTriggerReload(filename)) {
      return;
    }

    console.log('Changement détecté : ' + filename);
    broadcastReload(filename);
  });
} catch (error) {
  console.warn('Surveillance auto indisponible : ' + error.message);
}

server.listen(PORT, () => {
  console.log('Aperçu local prêt sur http://localhost:' + PORT);
  console.log('Enregistre un fichier et la page se rechargera toute seule.');
});
