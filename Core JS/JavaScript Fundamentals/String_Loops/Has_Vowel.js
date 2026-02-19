// your code here

function hasVowel(str) {
  let vowels = ["a", "e", "i", "o", "u"];

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (vowels.includes(char)) {
      return true;
    }
  }
  return false;
}

console.log(hasVowel("dog")); // true
console.log(hasVowel("conventional")); // true
console.log(hasVowel("rhythm")); // false
