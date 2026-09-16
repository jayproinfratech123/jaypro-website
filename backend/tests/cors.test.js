import test from 'node:test';
import assert from 'node:assert/strict';
import express from 'express';
import { createCorsMiddleware } from '../config/cors.js';

test('website preflights and error responses carry CORS permissions; other origins do not', async t => {
  const app = express();
  app.use(createCorsMiddleware({ NODE_ENV: 'production', CLIENT_URL: ' https://preview.example.com/ ' }));
  app.use((req, res) => res.status(401).json({ message: 'Unauthorized' }));
  const server = app.listen(0, '127.0.0.1');
  await new Promise(resolve => server.once('listening', resolve));
  t.after(() => new Promise(resolve => server.close(resolve)));
  const base = `http://127.0.0.1:${server.address().port}`;
  for (const path of ['/api/auth/me', '/api/leads', '/api/payments/create-order']) {
    const response = await fetch(base + path, {
      method: 'OPTIONS',
      headers: { Origin: 'https://jayproinfratech.com', 'Access-Control-Request-Method': 'POST', 'Access-Control-Request-Headers': 'authorization,content-type' },
    });
    assert.equal(response.status, 204);
    assert.equal(response.headers.get('access-control-allow-origin'), 'https://jayproinfratech.com');
    assert.match(response.headers.get('access-control-allow-headers'), /Authorization/);
  }
  for (const origin of ['https://jayproinfratech.com', 'https://preview.example.com', 'https://untrusted.example', 'http://localhost:5173']) {
    const response = await fetch(base + '/api/auth/me', { headers: { Origin: origin } });
    assert.equal(response.status, 401);
    assert.equal(response.headers.get('access-control-allow-origin'), ['https://jayproinfratech.com', 'https://preview.example.com'].includes(origin) ? origin : null);
  }
});
