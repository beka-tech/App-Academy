/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:


*/

let longestWord = function (sentence) {
  // Your code here
  if (sentence.length <= 0) {
    return "";
  }

  let longest = sentence[0];
  sentence.split(" ").forEach(function (char) {
    if (char.length > longest.length) {
      longest = char;
    }
  });
  return longest;
};

console.log(longestWord("where did everyone go")); // 'everyone'
console.log(longestWord("prefer simplicity over complexity")); // 'simplicity'
console.log(longestWord("")); // ''

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = longestWord;
} catch (e) {
  module.exports = null;
}
