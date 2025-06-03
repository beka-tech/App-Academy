// Your code here

function tripletTrue(word) {
  let count = "";

  for (let i = 0; i < word.length; i++) {
    if (word === word[i]) {
      count++;
    }
  }
  return count;
}

console.log(tripletTrue("caaabb")); // true
console.log(tripletTrue("terrrrrible")); // true
console.log(tripletTrue("runninggg")); // true
console.log(tripletTrue("bootcamp")); // false
console.log(tripletTrue("e")); // false
console.log(tripletTrue("ewwwe")); // false
