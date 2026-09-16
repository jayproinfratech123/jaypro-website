import '../config/env.js';
import bcrypt from 'bcryptjs';
import { randomUUID } from 'node:crypto';
import pool from '../config/db.js';
try {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !/^\S+@\S+\.\S+$/.test(email) || !password || password.length < 12 || Buffer.byteLength(password) > 72) {
    throw new Error('Set ADMIN_EMAIL and ADMIN_PASSWORD (12 or more characters, at most 72 bytes) in the backend environment.');
  }
  await pool.execute('INSERT INTO crm_users (id, name, email, password_hash, role) VALUES (?, ?, ?, ?, ?)',
    [randomUUID(), process.env.ADMIN_NAME || 'Administrator', email, await bcrypt.hash(password, 12), 'admin']);
  console.log('Administrator created. Sign in at /admin/preview-login. Remove ADMIN_PASSWORD from the environment after setup.');
} catch (error) {
  console.error('Admin setup failed:', error.code || error.message);
  process.exitCode = 1;
} finally { await pool.end(); }
