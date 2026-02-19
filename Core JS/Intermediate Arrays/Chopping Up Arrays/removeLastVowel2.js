let removeLastVowel = function (word) {
  let vowels = "aeiou";

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (vowels.includes(char)) {
      return word.slice(0, i) + word.slice(i + 1);
    }
  }

  return word;
};

console.log(removeLastVowel("Whene")); //whne
console.log(removeLastVowel("Apple")); //pple
console.log(removeLastVowel("Beka")); //Bka
