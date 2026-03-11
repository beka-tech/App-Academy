const fs = require("fs");
function WriteDataFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", (err) => {
    if (err) {
      console.log(err);
    }
  });
}
function generate4DigitId() {
  return Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
}

module.exports = { WriteDataFile, generate4DigitId };
