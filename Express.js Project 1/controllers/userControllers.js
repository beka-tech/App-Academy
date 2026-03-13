const users = require("../data/user");
const { WriteDataFile, generate4DigitId } = require("../util");
const { findByID, create, update, deletes } = require("../model/userModel");

async function getAllUser(req, res) {
  try {
    res.send(users);
  } catch (error) {
    console.log(error);
  }
}

async function getUserByID(req, res) {
  try {
    const id = req.params.id;
    const user = await findByID(id);
    if (!user) res.send("404 User Not Found");
    res.send(user);
  } catch (error) {
    console.log(error);
  }
}

async function createUser(req, res) {
  try {
    const user = req.body;
    const createdUser = await create(user);
    res.json(createdUser);
  } catch (error) {
    console.log(error);
  }
}

async function updateUser(req, res) {
  try {
    const user = req.body;
    const id = req.params.id;
    const updatedUser = await update(user, id);
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    const d = await deletes(id);
    res.send(`User ${d} Deleted `);
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
