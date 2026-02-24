const fs = require("fs").promises;

async function main() {
  try {
    await fs.writeFile("example.txt", "file system in async await");
    const data = await fs.readFile("example.txt", "utf8");
    await fs.unlink("example.txt");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

main();
