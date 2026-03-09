const users = require("../data/user.json");
const { writeData } = require("../util");
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

function update(id, updatedUser) {
  return new Promise((resolve, rejects) => {
    const index = users.findIndex((u) => String(u.userUniqueId) === String(id));
    users[index] = {
      userUniqueId: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...updatedUser,
    };
    writeData(users);
    resolve(users[index]);
  });
}

function deletes(id) {
  return new Promise((resolve, reject) => {
    const index = users.findIndex((u) => String(u.userUniqueId) === String(id));

    if (index === -1) {
      return resolve(null);
    }

    const deletedUser = users.splice(index, 1)[0];

    writeData(users);
    resolve(deletedUser);
  });
}
module.exports = { findAll, findByID, create, update, deletes };
