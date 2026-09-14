import 'dotenv/config';
import { readFile } from 'node:fs/promises';
import pool from '../config/db.js';
try {
  const sql = await readFile(new URL('../db/schema.sql', import.meta.url), 'utf8');
  for (const statement of sql.split(';').map(s => s.trim()).filter(Boolean)) await pool.query(statement);
  console.log('CRM tables are ready. Existing records were preserved.');
} catch (error) {
  console.error('Database setup failed:', error.code || error.name);
  process.exitCode = 1;
} finally { await pool.end(); }
