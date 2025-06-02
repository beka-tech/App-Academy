function eitherStringIncluded(sentence, word1, word2) {
  // your code here...
  let str1 = sentence.toUpperCase();
  let str2 = word1.toUpperCase();
  let str3 = word2.toUpperCase();

  return str1.includes(str2) || str1.includes(str3);
}

console.log(eitherStringIncluded("how now brown cow?", "panther", "cow")); //=> true
console.log(eitherStringIncluded("Question?", "Answer", "?")); //=> true
console.log(eitherStringIncluded("I love programming", "apple", "potato")); //=> false
console.log(eitherStringIncluded("Dance party!", "?", "what")); //=> false
