const users = require("../data/user");
const { WriteDataFile, generate4DigitId } = require("../util");

async function getAllUser(req, res) {
  try {
    res.send(users);
  } catch (error) {
    console.log(error);
  }
}

async function getUserByID(req, res) {
  try {
    const user = users.find((u) => u.userUniqueId === req.params.id);
    if (!user) res.send("404 User Not Found");
    res.send(user);
  } catch (error) {
    console.log(error);
  }
}

async function createUser(req, res) {
  try {
    const user = req.body;

    const newUser = {
      userUniqueId: generate4DigitId(),
      ...user,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    WriteDataFile("./data/user.json", users);
    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
}

async function updateUser(req, res) {
  try {
    const user = req.body;
    const Index = users.findIndex((u) => u.userUniqueId === req.params.id);
    users[Index] = { ...user, createdAt: new Date().toISOString() };

    users.push(users[Index]);
    WriteDataFile("./data/user.json", users);
    res.json(users[Index]);
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(req, res) {
  try {
    const user = users.filter((u) => u.userUniqueId !== req.params.id);
    if (!users.find((u) => u.userUniqueId === req.params.id))
      res.send("404 User Not Found");

    WriteDataFile("./data/user.json", user);
    res.send(`User 4{req.params.id} Deleted `);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllUser,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
};
