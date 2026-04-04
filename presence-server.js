const http = require('http');

const PORT = Number(process.env.PORT) || 3000;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '*';
const PRESENCE_ROUTE = '/__presence';
const presenceClients = new Set();
const presenceUsers = new Map();

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
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

function sanitizeNickname(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 20);
}

function broadcastPresence() {
  const users = [...presenceUsers.values()]
    .map((entry) => entry.name)
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));

  const payload = `data: ${JSON.stringify({ type: 'presence', users })}\n\n`;
  for (const client of presenceClients) {
    client.write(payload);
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

  setCorsHeaders(res);
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
  const keepAlive = setInterval(() => {
    res.write(': ping\n\n');
  }, 20000);

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

const server = http.createServer((req, res) => {
  if ((req.method || 'GET').toUpperCase() === 'OPTIONS') {
    setCorsHeaders(res);
    res.writeHead(204);
    res.end();
    return;
  }

  if ((req.url || '').startsWith(PRESENCE_ROUTE)) {
    registerPresenceClient(req, res);
    return;
  }

  if ((req.url || '').startsWith('/health')) {
    sendJson(res, 200, { ok: true, users: presenceUsers.size });
    return;
  }

  sendJson(res, 200, {
    ok: true,
    service: 'sabsab-live-presence',
    routes: [PRESENCE_ROUTE, '/health'],
  });
});

server.listen(PORT, () => {
  console.log(`Presence service ready on http://localhost:${PORT}`);
});
