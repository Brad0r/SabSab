const http = require('http');

const PORT = Number(process.env.PORT) || 3000;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '*';
const PRESENCE_ROUTE = '/__presence';
const MULTI_ROUTE = '/__multi';
const MAX_MULTI_HISTORY = 800;
const presenceClients = new Set();
const presenceUsers = new Map();
const multiClients = new Set();
const multiEventHistory = [];

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function sendJson(res, statusCode, payload) {
  setCorsHeaders(res);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-cache',
  });
  res.end(JSON.stringify(payload));
}

function writeSse(res, payload) {
  res.write(`data: ${JSON.stringify(payload)}\n\n`);
}

function sanitizeNickname(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 20);
}

function createSseStream(res) {
  setCorsHeaders(res);
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
  });
  res.write('\n');

  return setInterval(() => {
    res.write(': ping\n\n');
  }, 20000);
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

  const payload = { type: 'presence', users };
  for (const client of presenceClients) {
    writeSse(client, payload);
  }
}

function registerPresenceClient(req, res) {
  const requestUrl = new URL(req.url || PRESENCE_ROUTE, `http://${req.headers.host || `localhost:${PORT}`}`);
  const clientId = (requestUrl.searchParams.get('clientId') || '').trim();
  const safeName = sanitizeNickname(requestUrl.searchParams.get('name'));

  if (!clientId || !safeName) {
    sendJson(res, 400, { ok: false, error: 'Pseudo ou identifiant manquant.' });
    return;
  }

  const keepAlive = createSseStream(res);
  const previousEntry = presenceUsers.get(clientId) || { name: safeName, count: 0 };

  presenceUsers.set(clientId, {
    name: safeName,
    count: previousEntry.count + 1,
  });

  presenceClients.add(res);
  broadcastPresence();

  req.on('close', () => {
    clearInterval(keepAlive);
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
    name: sanitizeNickname(payload.name) || 'Invité',
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
    eventPayload.points = payload.points
      .map(sanitizePoint)
      .filter(Boolean)
      .slice(0, 80);
  }

  return eventPayload;
}

function rememberMultiEvent(eventPayload) {
  if (eventPayload.type === 'clear-own-canvas' && eventPayload.ownerSessionId) {
    for (let index = multiEventHistory.length - 1; index >= 0; index -= 1) {
      const entry = multiEventHistory[index];
      if (!entry || entry.ownerSessionId !== eventPayload.ownerSessionId) continue;
      if (entry.type === 'draw-segment' || entry.type === 'draw-stroke') {
        multiEventHistory.splice(index, 1);
      }
    }
  }

  multiEventHistory.push(eventPayload);
  if (multiEventHistory.length > MAX_MULTI_HISTORY) {
    multiEventHistory.splice(0, multiEventHistory.length - MAX_MULTI_HISTORY);
  }
}

function broadcastMultiEvent(eventPayload) {
  rememberMultiEvent(eventPayload);
  for (const client of multiClients) {
    writeSse(client, eventPayload);
  }
}

function registerMultiClient(req, res) {
  const keepAlive = createSseStream(res);
  multiClients.add(res);

  writeSse(res, { type: 'multi-ready', ok: true, events: multiEventHistory.length });
  multiEventHistory.forEach((entry) => {
    writeSse(res, entry);
  });

  req.on('close', () => {
    clearInterval(keepAlive);
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
      sendJson(res, 400, { ok: false, error: 'Événement multi invalide.' });
      return;
    }

    broadcastMultiEvent(eventPayload);
    sendJson(res, 202, { ok: true, id: eventPayload.id });
  } catch (error) {
    sendJson(res, 500, { ok: false, error: error?.message || 'Impossible de publier l\'événement.' });
  }
}

const server = http.createServer(async (req, res) => {
  const method = (req.method || 'GET').toUpperCase();
  const requestUrl = req.url || '/';

  if (method === 'OPTIONS') {
    setCorsHeaders(res);
    res.writeHead(204);
    res.end();
    return;
  }

  if (method === 'GET' && requestUrl.startsWith(PRESENCE_ROUTE)) {
    registerPresenceClient(req, res);
    return;
  }

  if (method === 'GET' && requestUrl.startsWith(MULTI_ROUTE)) {
    registerMultiClient(req, res);
    return;
  }

  if (method === 'POST' && requestUrl.startsWith(`${MULTI_ROUTE}/publish`)) {
    await handleMultiPublish(req, res);
    return;
  }

  if (requestUrl.startsWith('/health')) {
    sendJson(res, 200, {
      ok: true,
      users: presenceUsers.size,
      multiClients: multiClients.size,
      multiEvents: multiEventHistory.length,
    });
    return;
  }

  sendJson(res, 200, {
    ok: true,
    service: 'sabsab-live-presence',
    routes: [PRESENCE_ROUTE, MULTI_ROUTE, `${MULTI_ROUTE}/publish`, '/health'],
  });
});

server.listen(PORT, () => {
  console.log(`Presence service ready on http://localhost:${PORT}`);
});
