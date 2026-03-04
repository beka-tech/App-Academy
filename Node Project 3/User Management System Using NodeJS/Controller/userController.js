const users = require("../model/userModel");
const { findAll } = require("../model/userModel");
const { readData, getBody } = require("../util");
const crypto = require("crypto");

async function getUser(req, res) {
  try {
    const user = await users.findAll();
    res.writeHead(200, { "content-type": "text/JSON" });
    res.end(JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
}
async function getUserByID(req, res, userUniqueId) {
  try {
    const user = await users.findByID(userUniqueId);
    if (!user) {
      res.writeHead(404, { "content-type": "text/plain" });
      res.end("User Not Found");
    }
    res.writeHead(200, { "content-type": "text/JSON" });
    res.end(JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
}
async function createUser(req, res) {
  try {
    const newUser = await getBody(req);

    const userN = await users.create(newUser);

    res.writeHead(200, { "content-type": "text/JSON" });
    res.end(JSON.stringify(userN));
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getUser, getUserByID, createUser };
