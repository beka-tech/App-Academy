const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "First", "second", "thrid", "file.txt");

const filePath2 = path.basename(filePath);

console.log(path.basename(filePath));

async function read() {
  const data = await fs.readFile(filePath, "utf8");
  console.log(data);
  await fs.writeFile(filePath, "\n\n Wite File", "utf8");
  await fs.appendFile(filePath, "\n\n appened file", "utf8");
}

read();
