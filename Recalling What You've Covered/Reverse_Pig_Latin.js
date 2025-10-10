// Reverse Pig Latin undoes the Pig Latin transformation.
//
// Rules:
// 1. If a word ends with 'yay', remove it (word originally started with a vowel).
// 2. If a word ends with 'ay' (but not 'yay'), move the last consonant cluster
//    back to the front of the word.
//
// Example:
// "ananabay" → "banana"
// "appleyay" → "apple"

function reversePigLatin(word) {
  // your code here...
}

console.log(reversePigLatin("ananabay")); // "banana"
console.log(reversePigLatin("appleyay")); // "apple"
