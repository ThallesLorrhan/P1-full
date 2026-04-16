const userRepository = require("../repositories/userRepository");

async function getAllUsers() {
  return userRepository.getAllUsers();
}

async function getUserById(id) {
  if (!Number.isInteger(id) || id <= 0) return null;
  return userRepository.getUserById(id);
}

async function createUser(data) {
  const user = {
    name: data.name,
    email: data.email,
  };

  return userRepository.createUser(user);
}

async function updateUser(id, data) {
  if (!Number.isInteger(id) || id <= 0) return null;
  const updates = {
    name: data.name,
    email: data.email,
  };

  return userRepository.updateUser(id, updates);
}

async function deleteUser(id) {
  if (!Number.isInteger(id) || id <= 0) return false;
  return userRepository.deleteUser(id);
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
