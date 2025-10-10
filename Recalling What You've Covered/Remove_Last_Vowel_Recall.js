// your code here
let removeLastVowel = function (word) {
  let vowel = "aeiou";
  for (let i = word.length; i > 0; i--) {
    if (vowel.includes(word[i])) {
      return word.slice(0, i) + word.slice(i + 1);
    } else if (!vowel.includes(word[i])) {
      return word;
    }
  }
};

console.log(removeLastVowel("bootcamp")); // 'bootcmp'
console.log(removeLastVowel("better")); // 'bettr'
console.log(removeLastVowel("graph")); // 'grph'
console.log(removeLastVowel("thy")); // 'thy'
