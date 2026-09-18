import { MongoClient } from 'mongodb';
import './env.js';
const client = new MongoClient(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017', { serverSelectionTimeoutMS: 10000 });
const db = client.db(process.env.MONGODB_DB_NAME || 'jayproinfratech');
export default db;
export const closeDatabase = () => client.close();
export async function setupDatabase() {
  await db.command({ ping: 1 });
  await Promise.all([
    db.collection('crm_users').createIndex({ id: 1 }, { unique: true }),
    db.collection('crm_users').createIndex({ email: 1 }, { unique: true }),
    db.collection('crm_sessions').createIndex({ token_hash: 1 }, { unique: true }),
    db.collection('crm_sessions').createIndex({ expires_at: 1 }, { expireAfterSeconds: 0 }),
    db.collection('crm_leads').createIndex({ id: 1 }, { unique: true }),
    db.collection('crm_leads').createIndex({ paymentId: 1 }, { unique: true, partialFilterExpression: { paymentId: { $type: 'string' } } }),
    db.collection('crm_leads').createIndex({ orderId: 1 }, { unique: true, partialFilterExpression: { orderId: { $type: 'string' } } }),
    db.collection('crm_leads').createIndex({ employeeId: 1, created_at: -1 }),
    db.collection('crm_leads').createIndex({ created_at: -1, id: -1 }),
  ]);
}
export async function nextLeadId() {
  const counter = await db.collection('counters').findOneAndUpdate({ _id: 'leads' }, { $inc: { value: 1 } }, { upsert: true, returnDocument: 'after', includeResultMetadata: false });
  return counter.value;
}
