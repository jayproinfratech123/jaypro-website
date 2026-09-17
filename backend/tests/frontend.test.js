import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import express from 'express';
import { mountFrontend } from '../config/frontend.js';

test('combined hosting serves SPA routes without swallowing API routes or missing assets', async t => {
  const directory = mkdtempSync(path.join(tmpdir(), 'jaypro-frontend-'));
  writeFileSync(path.join(directory, 'index.html'), '<html>Website</html>');
  const app = express();
  app.get('/api', (req, res) => res.json({ success: true }));
  app.post('/api/leads', (req, res) => res.status(201).json({ success: true }));
  mountFrontend(app, directory);
  app.use((req, res) => res.status(404).json({ success: false }));
  const server = app.listen(0, '127.0.0.1');
  await new Promise(resolve => server.once('listening', resolve));
  t.after(async () => {
    await new Promise(resolve => server.close(resolve));
    rmSync(directory, { recursive: true });
  });
  const base = `http://127.0.0.1:${server.address().port}`;
  for (const route of ['/', '/admin/preview-login']) {
    const response = await fetch(base + route);
    assert.equal(response.status, 200);
    assert.match(await response.text(), /Website/);
  }
  assert.deepEqual(await (await fetch(base + '/api')).json(), { success: true });
  assert.equal((await fetch(base + '/api/leads', { method: 'POST' })).status, 201);
  for (const route of ['/api/missing', '/missing.js', '/.env']) {
    const response = await fetch(base + route);
    assert.equal(response.status, 404);
    assert.deepEqual(await response.json(), { success: false });
  }
});
