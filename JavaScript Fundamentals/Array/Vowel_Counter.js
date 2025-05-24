function countVowels(word) {
  let count = 0;
  let vowel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < word.length; i++) {
    if (vowel.includes(word[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2
