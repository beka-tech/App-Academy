function doubleLetterCount(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      count += 1;
    }
  }
  return count;
}

console.log(doubleLetterCount("the jeep rolled down the hill")); // 3
console.log(doubleLetterCount("bootcamp")); // 1
console.log(doubleLetterCount("b")); // 1
