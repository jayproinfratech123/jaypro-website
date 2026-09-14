import 'dotenv/config';
import mysql from 'mysql2/promise';

let connection;
try {
  connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectTimeout: 10000,
    ...(process.env.DB_SSL === 'true' ? { ssl: { rejectUnauthorized: true } } : {}),
  });
  const [databases] = await connection.query('SHOW DATABASES');
  const [identity] = await connection.query('SELECT CURRENT_USER() AS matchedAccount');
  console.log(JSON.stringify({ configuredDatabase: process.env.DB_NAME, identity, accessibleDatabases: databases }, null, 2));
} catch (error) {
  console.error('Database access check failed:', error.code || error.name);
  process.exitCode = 1;
} finally {
  if (connection) await connection.end();
}
