let removeFirstVowel = function (word) {
  let vowels = "aeiouAEIOU"; // include uppercase vowels

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      // Remove the first vowel found
      return word.slice(0, i) + word.slice(i + 1);
    }
  }
  return word; // no vowels found, return original word
};

console.log(removeFirstVowel("Whene")); // "Whne"
console.log(removeFirstVowel("Apple")); // "pple"
console.log(removeFirstVowel("Sky")); // "Sky" (no vowels)
console.log(removeFirstVowel("Whenene")); // "Whnne"
