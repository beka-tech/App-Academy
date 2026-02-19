let removeLastVowel = function (word) {
  let vowels = "aeiou";

  for (let i = word.length - 1; i >= 0; i--) {
    let char = word[i];
    if (vowels.includes(char)) {
      return word.slice(0, i) + word.slice(i + 1);
    }
  }

  return word;
};

console.log(removeLastVowel("When"));
