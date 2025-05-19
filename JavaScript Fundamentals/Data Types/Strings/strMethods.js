let str = "Hello";
console.log(str.length);

let fullName = "beka aman";
console.log(fullName.toUpperCase()); // ths converts to uppercase

let str2 = "BEKA_AMAN";
console.log(str2.slice(0, -2));

console.log(str2.substring(0, -2));

let str3 = " JavaScript the String data type ";

console.log(str3.includes("data"));
console.log(str3.includes("z"));
console.log(str2.indexOf("A"));
console.log(str3.replace("a", "A"));

console.log(str3.replace(/t/g, "l")); //use a regular expression with the global flag g:
console.log(str3.trim());
console.log(str3.split());

let fruits = "Apple, Banana, Orange, Graps";

let result2 = fruits.split(" ");

console.log(result2);

let sentence = "I love JavaScript";
let result = sentence.split(" ");
console.log(result);
// Output: ["I", "love", "JavaScript"]

console.log("car"[2]);
