function hasVowel(str) {
  let vowel = "aeiou";

  for (let i = 0; i < str.length; i++) {
    let element = str[i].toLowerCase();
    if (vowel.includes(element)) {
      return true;
    }
  }
  return false;
}

console.log(hasVowel("dog")); // true
console.log(hasVowel("conventional")); // true
console.log(hasVowel("rhythm")); // false
