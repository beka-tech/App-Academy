/*
Write a function `repeatingTranslate` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:

- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according to the
  following rules:
  - if the word ends with a vowel, simply repeat the word twice (example:
    'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself (example:
    'trash'->'trashash')

Note that if words are capitalized in the original sentence, they should remain
capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Can you reduce the problem into helper functions?

Examples:

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

*/

let repeatingTranslate = function (sentence) {
  return sentence.split(" ").map(translateWord).join(" ");
};

let translateWord = function (word) {
  const vowels = "aeiouAEIOU";

  // words shorter than 3 characters remain unchanged
  if (word.length < 3) return word;

  let lastChar = word[word.length - 1];

  // if ends with vowel → repeat the word
  if (vowels.includes(lastChar)) {
    return word + word;
  } else {
    // find index of last vowel
    let lastVowelIndex = -1;
    for (let i = word.length - 1; i >= 0; i--) {
      if (vowels.includes(word[i])) {
        lastVowelIndex = i;
        break;
      }
    }

    if (lastVowelIndex !== -1) {
      let repeatPart = word.slice(lastVowelIndex);
      return word + repeatPart;
    } else {
      // no vowels, just return the word
      return word;
    }
  }
};

console.log(repeatingTranslate("we like to go running fast")); // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash")); // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish")); // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France")); // "herer familyily flewew to FranceFrance"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = repeatingTranslate;
} catch (e) {
  module.exports = null;
}
