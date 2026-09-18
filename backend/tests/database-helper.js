import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongoClient } from 'mongodb';
import db, { setupDatabase } from '../config/db.js';
export async function testDatabase(t) {
  const server = await MongoMemoryServer.create();
  const client = new MongoClient(server.getUri());
  const isolated = client.db('test');
  t.mock.method(db, 'collection', name => isolated.collection(name));
  t.mock.method(db, 'command', command => isolated.command(command));
  t.after(async () => { await client.close(); await server.stop(); });
  await setupDatabase();
  return isolated;
}
