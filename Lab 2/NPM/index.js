// import lodash
const _ = require("lodash");
const colors = require("colors");

// use lodash to work with arrays
const numbers = [10, 20, 30, 40];
const doubled = _.map(numbers, (n) => n * 2);

console.log("Doubled numbers:", doubled);
console.log("hello".green); // prints "hello" in green
console.log("i like cake and pies".underline.red); // red and underlined
console.log("inverse the color".inverse); // flips the text color
console.log("OMG Rainbows!".rainbow); // rainbow colors 🌈
console.log("Run the trap".trap); // adds a fun effect
