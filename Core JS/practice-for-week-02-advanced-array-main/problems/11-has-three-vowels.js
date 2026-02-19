/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:


*/

let hasThreeVowels = function (string) {
  // Your code here

  let str = string.split("");
  let vowels = "aeiou";
  let foundVowels = [];

  str.forEach((char) => {
    if (vowels.includes(char) && !foundVowels.includes(char)) {
      foundVowels.push(char);
    }
  });
  return foundVowels.length >= 3;
};

console.log(hasThreeVowels("delicious")); //  true
console.log(hasThreeVowels("bootcamp prep")); //  true
console.log(hasThreeVowels("bootcamp")); //  false
console.log(hasThreeVowels("dog")); //  false
console.log(hasThreeVowels("go home")); //  false

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = hasThreeVowels;
} catch (e) {
  module.exports = null;
}
