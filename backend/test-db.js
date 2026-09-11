import pool from "./config/db.js";

async function testDatabase() {
  try {

    const connection = await pool.getConnection();

    console.log("MySQL connected successfully!");

    const [result] = await connection.query(
      "SELECT 1 AS connected"
    );

    console.log(result);

    connection.release();
    process.exit(0);

  } catch (error) {

    console.error("MySQL connection failed!");
    console.error("Code:", error.code);
    console.error("Message:", error.message);

    process.exit(1);
  }
}

testDatabase();