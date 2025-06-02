// your code here

function hasVowel(str) {
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      return true;
    }
  }
  return false;
}

console.log(hasVowel("dog")); // true
console.log(hasVowel("conventional")); // true
console.log(hasVowel("rhythm")); // false
