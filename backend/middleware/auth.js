import jwt from 'jsonwebtoken';
import db from '../config/db.js';
export async function requireAuth(req, res, next) {
  try {
    const token = req.headers.authorization?.match(/^Bearer (.+)$/)?.[1];
    if (!token) return res.status(401).json({ message: 'Please sign in.' });
    let payload;
    try { payload = jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] }); }
    catch { return res.status(401).json({ message: 'Session expired. Please sign in.' }); }
    if (payload.type !== 'access') return res.status(401).json({ message: 'Invalid session.' });
    const user = await db.collection('crm_users').findOne({ id: payload.sub }, { projection: { _id: 0, id: 1, name: 1, email: 1, role: 1 } });
    if (!user) return res.status(401).json({ message: 'Invalid session.' });
    req.user = user; next();
  } catch (error) { next(error); }
}
export function requireAdmin(req, res, next) {
  if (req.user?.role !== 'admin') return res.status(403).json({ message: 'Administrator access required.' });
  next();
}
