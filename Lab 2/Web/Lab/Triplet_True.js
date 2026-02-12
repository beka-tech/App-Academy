// Your code here

function tripletTrue(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i] === words[i + 1] && words[i] === words[i + 2]) {
      return true;
    }
  }
  return false;
}

console.log(tripletTrue("caaabb")); // true
console.log(tripletTrue("terrrrrible")); // true
console.log(tripletTrue("runninggg")); // true
console.log(tripletTrue("bootcampo")); // false
console.log(tripletTrue("e")); // false
