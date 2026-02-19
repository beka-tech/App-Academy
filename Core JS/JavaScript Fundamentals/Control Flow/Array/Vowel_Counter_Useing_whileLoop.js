function countVowels(word) {
  let count = 0;
  let char = "aeiou";
  let i = 0; // Initialize the index for the while loop
  while (i < word.length) {
    // Loop until the end of the word
    if (char.includes(word[i].toLowerCase())) {
      count++;
    }
    i++; // Increment the index
  }
  return count;
}

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2
console.log(countVowels("beka")); // => 2
