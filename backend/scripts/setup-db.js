import { setupDatabase, closeDatabase } from '../config/db.js';
try {
  await setupDatabase();
  console.log('MongoDB connection and indexes ready.');
} catch (error) {
  console.error('MongoDB setup failed:', error.name);
  process.exitCode = 1;
} finally { await closeDatabase(); }
