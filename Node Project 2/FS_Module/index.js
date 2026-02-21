const fs = require("fs");
const path = require("path");
// const mytext3 = require("../custom modules/");

const mytext_J = path.basename("\custom modules\myfile3.txt");

console.log(mytext_J);

const filePath = path.join(__dirname, "myfile3.txt");

fs.writeFile(filePath, "file system module 2", (err, data) => {
  if (err) {
    console.error(err);
  }
});

const myfile3 = path.resolve(__dirname, "../custom modules/myfile3.txt");
console.log(myfile3);

fs.readFile(myfile3, "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

const myfile4 = path.resolve(__dirname, "../custom modules/myfile4.txt");
console.log(myfile4);

fs.writeFile(myfile4, "file system module 4", (err, data) => {
  if (err) {
    console.log(err);
  }
});
