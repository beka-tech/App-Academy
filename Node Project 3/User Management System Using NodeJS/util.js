const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, ".", "data", "user.json");

function readData() {
  const data = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(data || "[]");
}

function writeData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}
function getBody(req) {
  return new Promise((resolve) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => resolve(JSON.parse(body || "{}")));
  });
}

module.exports = { readData, writeData, getBody };
