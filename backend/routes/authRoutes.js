import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { randomBytes, createHash, randomUUID } from 'node:crypto';
import pool from '../config/db.js';
import { requireAuth } from '../middleware/auth.js';
const router = express.Router();
const run = fn => (req, res, next) => Promise.resolve(fn(req, res)).catch(next);
const hash = token => createHash('sha256').update(token).digest('hex');
const access = user => jwt.sign({ type: 'access' }, process.env.JWT_SECRET, { subject: user.id, expiresIn: '15m', algorithm: 'HS256' });
async function session(user) {
  const refreshToken = randomBytes(48).toString('hex');
  await pool.execute('INSERT INTO crm_sessions (token_hash, user_id, expires_at) VALUES (?, ?, DATE_ADD(UTC_TIMESTAMP(), INTERVAL 7 DAY))', [hash(refreshToken), user.id]);
  return { user, accessToken: access(user), refreshToken };
}
router.post('/login', run(async (req, res) => {
  const { email, password } = req.body;
  if (typeof email !== 'string' || typeof password !== 'string' || password.length > 256) return res.status(400).json({ message: 'Invalid login details.' });
  const [rows] = await pool.execute('SELECT * FROM crm_users WHERE email=?', [email.trim().toLowerCase()]);
  const user = rows[0];
  if (!user || !await bcrypt.compare(password, user.password_hash)) return res.status(401).json({ message: 'Invalid email or password.' });
  res.json(await session({ id: user.id, name: user.name, email: user.email, role: user.role }));
}));
router.post('/register', run(async (req, res) => {
  const { name, email, password } = req.body;
  if (typeof name !== 'string' || !name.trim() || name.length > 150 || typeof email !== 'string' || email.length > 254 || !/^\S+@\S+\.\S+$/.test(email) || typeof password !== 'string' || password.length < 12 || Buffer.byteLength(password) > 72) return res.status(400).json({ message: 'Enter valid details and a password of at least 12 characters (maximum 72 bytes).' });
  const user = { id: randomUUID(), name: name.trim(), email: email.trim().toLowerCase(), role: 'customer' };
  try { await pool.execute('INSERT INTO crm_users (id, name, email, password_hash, role) VALUES (?, ?, ?, ?, ?)', [user.id, user.name, user.email, await bcrypt.hash(password, 12), user.role]); }
  catch (error) { if (error.code === 'ER_DUP_ENTRY') return res.status(409).json({ message: 'Account already exists.' }); throw error; }
  res.status(201).json(await session(user));
}));
router.post('/refresh', run(async (req, res) => {
  if (typeof req.body.refreshToken !== 'string') return res.status(401).json({ message: 'Invalid session.' });
  const [rows] = await pool.execute('SELECT u.id FROM crm_sessions s JOIN crm_users u ON u.id=s.user_id WHERE s.token_hash=? AND s.expires_at>UTC_TIMESTAMP()', [hash(req.body.refreshToken)]);
  if (!rows[0]) return res.status(401).json({ message: 'Session expired.' });
  res.json({ accessToken: access(rows[0]) });
}));
router.post('/logout', run(async (req, res) => {
  if (typeof req.body.refreshToken === 'string') await pool.execute('DELETE FROM crm_sessions WHERE token_hash=?', [hash(req.body.refreshToken)]);
  res.json({ success: true });
}));
router.get('/me', requireAuth, (req, res) => res.json(req.user));
export default router;
