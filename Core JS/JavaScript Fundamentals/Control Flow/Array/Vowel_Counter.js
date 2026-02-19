function countVowels(word) {
  // your code here...
  let count = 0;
  let char = "aeiou";
  for (let i = 0; i < word.length; i++) {
    if (char.includes(word[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2
console.log(countVowels("beka")); // => 2
