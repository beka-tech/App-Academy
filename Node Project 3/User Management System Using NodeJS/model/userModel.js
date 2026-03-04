const users = require("../data/user.json");
const { readData, writeData } = require("../util");
const crypto = require("crypto");

function findAll() {
  return new Promise((resolve, rejects) => {
    resolve(users);
  });
}
function findByID(id) {
  return new Promise((resolve, rejects) => {
    const user = users.find((u) => String(u.userUniqueId) === String(id));
    resolve(user);
  });
}

function create(user) {
  return new Promise((resolve, rejects) => {
    const newUser = {
      userUniqueId: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...user,
    };

    users.push(newUser);
    writeData(users);
    resolve(newUser);
  });
}

module.exports = { findAll, findByID, create };
