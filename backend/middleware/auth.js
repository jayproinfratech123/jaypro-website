import jwt from 'jsonwebtoken';
import pool from '../config/db.js';
export async function requireAuth(req, res, next) {
  try {
    const token = req.headers.authorization?.match(/^Bearer (.+)$/)?.[1];
    if (!token) return res.status(401).json({ message: 'Please sign in.' });
    let payload;
    try { payload = jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] }); }
    catch { return res.status(401).json({ message: 'Session expired. Please sign in.' }); }
    if (payload.type !== 'access') return res.status(401).json({ message: 'Invalid session.' });
    const [rows] = await pool.execute('SELECT id, name, email, role FROM crm_users WHERE id=?', [payload.sub]);
    if (!rows[0]) return res.status(401).json({ message: 'Invalid session.' });
    req.user = rows[0]; next();
  } catch (error) { next(error); }
}
export function requireAdmin(req, res, next) {
  if (req.user?.role !== 'admin') return res.status(403).json({ message: 'Administrator access required.' });
  next();
}
