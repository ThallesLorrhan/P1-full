const mysql = require("mysql2/promise");

let pool;

async function initMysql() {
  pool = mysql.createPool({
    host: process.env.MYSQL_HOST || "mysql",
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER || "appuser",
    password: process.env.MYSQL_PASSWORD || "apppassword",
    database: process.env.MYSQL_DATABASE || "myapp",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;
  `);

  console.log("MySQL connected and users table is ready.");
}

function getMysqlPool() {
  if (!pool) {
    throw new Error("MySQL pool not initialized.");
  }
  return pool;
}

module.exports = {
  initMysql,
  getMysqlPool,
};
