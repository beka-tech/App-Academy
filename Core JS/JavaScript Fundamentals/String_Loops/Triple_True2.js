// Your code here

function tripletTrue(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i + 1] && word[i + 1] === word[i + 2]) {
      return true;
    }
  }
  return false;
}

console.log(tripletTrue("caaabb")); // true
console.log(tripletTrue("terrrrrible")); // true
console.log(tripletTrue("runninggg")); // true
console.log(tripletTrue("bootcamp")); // false
console.log(tripletTrue("ez")); // false
