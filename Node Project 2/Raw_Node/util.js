const fs = require("fs");

function WriteDataFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", (err) => {
    if (err) {
      console.log(err);
    }
  });
}

function getPostData(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      resolve(body);
      // console.log(body);
    });

    req.on("error", (err) => {
      reject(err);
    });
  });
}

// Simple 4-digit number (with leading zeros)
function generate4DigitId() {
  return Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
}

// console.log(generate4DigitId()); // Examples: '0347', '8912', '0005'

module.exports = { WriteDataFile, generate4DigitId, getPostData };
