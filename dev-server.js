const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT) || 5500;
const ROOT = __dirname;
const LIVE_RELOAD_ROUTE = '/__events';
const PRESENCE_ROUTE = '/__presence';
const reloadClients = new Set();
const presenceClients = new Set();
const presenceUsers = new Map();
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

function broadcastPresence() {
  const users = [...presenceUsers.entries()]
    .map(([clientId, entry]) => ({
      id: clientId,
      name: entry?.name || '',
    }))
    .filter((entry) => entry.name)
    .sort((a, b) => a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' }));

  const payload = `data: ${JSON.stringify({ type: 'presence', users })}\n\n`;
  for (const client of presenceClients) {
    client.write(payload);
  }
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

    const currentEntry = presenceUsers.get(clientId);
    if (!currentEntry) {
      broadcastPresence();
      return;
    }

    if (currentEntry.count <= 1) {
      presenceUsers.delete(clientId);
    } else {
      presenceUsers.set(clientId, {
        ...currentEntry,
        count: currentEntry.count - 1,
      });
    }

    broadcastPresence();
  });
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

const server = http.createServer((req, res) => {
  if ((req.url || '').startsWith(LIVE_RELOAD_ROUTE)) {
    registerLiveReloadClient(req, res);
    return;
  }

  if ((req.url || '').startsWith(PRESENCE_ROUTE)) {
    registerPresenceClient(req, res);
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
