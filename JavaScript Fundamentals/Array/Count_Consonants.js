function countVowels(word) {
  let count = 0;
  let vowel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < word.length; i++) {
    if (!vowel.includes(word[i]) && char >= "a" && char <= "z") {
      count++;
    }
  }
  return count;
}

console.log(countVowels("bootcamp32"));
console.log(countVowels("apple"));
console.log(countVowels("pizza"));
