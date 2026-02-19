function startsAndEndsWithVowel(word) {
  const vowels = "aeiou";

  let char_First = word[0].toLowerCase();
  let char_Last = word[word.length - 1].toLowerCase();
  if (
    vowels.includes(char_First) &&
    vowels.includes(char_Last) &&
    word.length >= 2
  ) {
    return true;
  }
  return false;
}

console.log(startsAndEndsWithVowel("dog")); // False
console.log(startsAndEndsWithVowel("aome")); // True
console.log(startsAndEndsWithVowel("e")); // False
