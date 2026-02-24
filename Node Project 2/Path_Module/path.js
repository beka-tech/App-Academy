const path = require("path");
const colors = require("colors");

// const fileName = path.dirname("/NODE PROJECT 2/myProcess.js");
// console.log(fileName);

// const name = path.basename("/NODE PROJECT 2/myProcess.js");
// console.log(name);

const absolutePath = path.resolve("NODE PROJECT 2", "myProcess.js");
const absolutePath2 = path.parse("/NODE PROJECT 2/myProcess.js");
// console.log(absolutePath.green);
// console.log(absolutePath2.green);

const info = path.parse("/NODE PROJECT 2/myProcess.js");
const info2 = path.parse(absolutePath);

const formatted = path.format(info);

// console.log(info2);
// console.log(formatted);

const name = path.basename("/foo/bar/baz/asdf/quux.html");
const name2 = path.dirname("/foo/bar/baz/asdf/quux.html");

console.log(name.green);
console.log(name2.green);
