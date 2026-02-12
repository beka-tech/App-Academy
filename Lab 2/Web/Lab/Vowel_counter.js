function countVowels(word) {
  // your code here...
  let count = 0;
  let vowel = "aeiou";

  for (let i = 0; i < word.length; i++) {
    const str = word[i].toLowerCase();
    if (vowel.includes(str)) {
      count += 1;
    }
  }
  return count;
}

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2
