const fs = require("fs").promises;
const file = "myFile.txt";

// async function Write() {
//   try {
//     await fs.writeFile(file, "hello", "utf8");
//   } catch (err) {
//     console.error(err);
//   }
// }
async function Read() {
  try {
    await fs.writeFile(file, "hello", "utf8");
    await fs.appendFile(file, "\n\n hello2");
    const data = await fs.readFile(file, "utf8");
    return data;
  } catch (err) {
    console.error(err);
  }
}

async function main() {
  await Write();
  const text = await Read();
  console.log(text);
}
main();
