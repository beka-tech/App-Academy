function countVowels(word) {
  // your code here...
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (vowels.includes(char)) {
      count += 1;
    }
  }
  return count;
}

console.log(countVowels("bootcampooOO")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2
