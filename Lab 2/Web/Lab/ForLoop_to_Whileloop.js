function eCounter(word) {
  let count = 0;

  let index = 0;
  while (index < word.length) {
    let char = word[index];
    if (char === "e" || char === "E") {
      count += 1;
    }
    index++;
  }
  return count;
}

console.log(eCounter("apple")); // => 1
console.log(eCounter("appleapple")); // => 2
console.log(eCounter("Appleee")); // => 3
