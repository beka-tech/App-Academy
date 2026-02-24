const fs = require("fs").promises;
const path = require("path");
const filename = path.basename("my_floder/child/example.txt");
const dirname = path.dirname("my_floder/child");

// fs.mkdir("my_Floder/child");
// fs.writeFile("my_floder/child/example.txt", "nested", "utf8");
// fs.writeFile(filename, "nested", "utf8");

const paths = path.join(__dirname, "example.txt");
console.log(paths);
