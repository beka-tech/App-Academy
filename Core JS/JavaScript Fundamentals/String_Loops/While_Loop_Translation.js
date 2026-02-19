function eCounter(word) {
  let i = 0;
  let count = 0;

  while (i < word.length) {
    if (word[i] == "e" || word[i] == "E") {
      count += 1;
    }
    i++;
  }
  return count;
}

console.log(eCounter("appleE"));
console.log(eCounter("appleapple")); // => 2
console.log(eCounter("Appleee")); // => 3
