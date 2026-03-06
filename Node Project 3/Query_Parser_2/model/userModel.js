
const fs = require("fs");
const path = require("path");

function getAllUsers() {
  const dataPath = path.join(__dirname, "../data/user.json");
  const raw = fs.readFileSync(dataPath);
  return JSON.parse(raw);
}

module.exports = { getAllUsers };
