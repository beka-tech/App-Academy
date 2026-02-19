const os = require("os");

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());

const mypc = os.cpus();
// console.log(mypc.model);
