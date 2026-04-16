const { getMysqlPool } = require("../config/mysql");

function mapUser(row) {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    createdAt: row.created_at,
  };
}

async function getAllUsers() {
  const pool = getMysqlPool();
  const [rows] = await pool.query("SELECT * FROM users ORDER BY id ASC");
  return rows.map(mapUser);
}

async function getUserById(id) {
  const pool = getMysqlPool();
  const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
  if (rows.length === 0) return null;
  return mapUser(rows[0]);
}

async function createUser(user) {
  const pool = getMysqlPool();
  const [result] = await pool.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [user.name, user.email],
  );
  return getUserById(result.insertId);
}

async function updateUser(id, updates) {
  const pool = getMysqlPool();
  const [result] = await pool.query(
    "UPDATE users SET name = ?, email = ? WHERE id = ?",
    [updates.name, updates.email, id],
  );
  if (result.affectedRows === 0) return null;
  return getUserById(id);
}

async function deleteUser(id) {
  const pool = getMysqlPool();
  const [result] = await pool.query("DELETE FROM users WHERE id = ?", [id]);
  return result.affectedRows > 0;
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
