import test from 'node:test';
import assert from 'node:assert/strict';
import express from 'express';
import { createCorsMiddleware } from '../config/cors.js';

test('website preflights and error responses carry CORS permissions; other origins do not', async t => {
  const app = express();
  const corsMiddleware = createCorsMiddleware({ NODE_ENV: 'production', CLIENT_URL: ' https://preview.example.com/ ' });
  app.options('/api/leads', corsMiddleware);
  app.use(corsMiddleware);
  app.use(express.json());
  app.post('/api/leads', (req, res) => res.status(201).json({ success: true }));
  app.use((req, res) => res.status(401).json({ message: 'Unauthorized' }));
  const server = app.listen(0, '127.0.0.1');
  await new Promise(resolve => server.once('listening', resolve));
  t.after(() => new Promise(resolve => server.close(resolve)));
  const base = `http://127.0.0.1:${server.address().port}`;
  for (const origin of ['https://jayproinfratech.com', 'https://www.jayproinfratech.com', 'https://preview.example.com']) {
  for (const path of ['/api/auth/me', '/api/leads', '/api/payments/create-order']) {
    const response = await fetch(base + path, {
      method: 'OPTIONS',
      headers: { Origin: origin, 'Access-Control-Request-Method': path === '/api/auth/me' ? 'GET' : 'POST', 'Access-Control-Request-Headers': 'authorization,content-type' },
    });
    assert.equal(response.status, 204);
    assert.equal(response.headers.get('access-control-allow-origin'), origin);
    assert.equal(response.headers.get('access-control-allow-credentials'), 'true');
    assert.match(response.headers.get('access-control-allow-headers'), /Authorization/);
    assert.match(response.headers.get('access-control-allow-headers'), /Content-Type/i);
    assert.match(response.headers.get('access-control-allow-methods'), /POST/);
    assert.match(response.headers.get('access-control-allow-methods'), /OPTIONS/);
  }
  }
  const submitted = await fetch(base + '/api/leads', {
    method: 'POST',
    headers: { Origin: 'https://jayproinfratech.com', 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'CORS test' }),
  });
  assert.equal(submitted.status, 201);
  assert.equal(submitted.headers.get('access-control-allow-origin'), 'https://jayproinfratech.com');
  assert.deepEqual(await submitted.json(), { success: true });
  for (const origin of ['https://jayproinfratech.com', 'https://preview.example.com', 'https://untrusted.example', 'http://localhost:5173']) {
    const response = await fetch(base + '/api/auth/me', { headers: { Origin: origin } });
    assert.equal(response.status, 401);
    assert.equal(response.headers.get('access-control-allow-origin'), ['https://jayproinfratech.com', 'https://preview.example.com'].includes(origin) ? origin : null);
  }
});
