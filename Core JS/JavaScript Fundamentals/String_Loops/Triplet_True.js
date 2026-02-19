function tripletTrue(word) {
  for (let i = 0; i < word.length; i++) {
    let char1 = word[i];
    let char2 = word[i + 1];
    let char3 = word[i + 2];
    if (char1 === char2 && char2 === char3) {
      return true;
    }
  }
  return false;
}

console.log(tripletTrue("caaabb")); // true
console.log(tripletTrue("terrrrrible")); // true
console.log(tripletTrue("runninggg")); // true
console.log(tripletTrue("bootcamp")); // false
console.log(tripletTrue("e")); // false
