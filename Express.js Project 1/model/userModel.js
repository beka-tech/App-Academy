const users = require("../data/user");
const { WriteDataFile, generate4DigitId } = require("../util");

function findByID(id) {
  return new Promise((resolve, reject) => {
    const user = users.find((u) => u.userUniqueId === id);
    resolve(user);
  });
}

function create(user) {
  return new Promise((resolve, reject) => {
    const newUser = {
      userUniqueId: generate4DigitId(),
      ...user,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    WriteDataFile("./data/user.json", users);
    resolve(newUser);
  });
}

function update(user, id) {
  return new Promise((resolve, reject) => {
    const Index = users.findIndex((u) => u.userUniqueId === id);
    users[Index] = { ...user, createdAt: new Date().toISOString() };
    users.push(users[Index]);
    WriteDataFile("./data/user.json", users);
    resolve(users[Index]);
  });
}

function deletes(id) {
  return new Promise((resolve, reject) => {
    const user = users.filter((u) => u.userUniqueId !== id);
    const userDeleted = users.find((u) => u.userUniqueId === id);

    WriteDataFile("./data/user.json", user);

    resolve(userDeleted.userName);
  });
}

module.exports = {
  findByID,
  create,
  update,
  deletes,
};
