const path = require("path");
const fs = require("fs").promises;

// \data\user.json
const filePath = path.join(__dirname, "data", "user.json");
try {
  const jsonData = {
    name: "beka",
    email: "abcexample.com",
  };
  fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), "utf8");

  (async () => {
    return await fs.readFile(filePath, "utf8");
  })();
} catch (error) {
  console.error(error);
}
