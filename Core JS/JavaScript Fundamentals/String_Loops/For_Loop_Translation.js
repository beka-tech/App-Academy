function aCounter(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "a" || word[i] === "A") {
      count += 1;
    }
  }
  return count;
}

console.log(aCounter("apple")); // => 1
