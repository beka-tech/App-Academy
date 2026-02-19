/*
Write a function `yeller(words)` that takes in an array of words.
The function should return a new array where each element of the original array
is yelled.

Solve this using Array's `map()` method.

Examples:


*/

let yeller = function (words) {
  // Your code here
  const word = words.map((char) => {
    return char.toUpperCase() + "!";
  });
  return word;
};

console.log(yeller(["hello", "world"])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(["kiwi", "orange", "mango"])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = yeller;
} catch (e) {
  module.exports = null;
}
