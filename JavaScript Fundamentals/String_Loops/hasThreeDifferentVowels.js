function hasThreeDifferentVowels(word) {
  const vowels = "aeiou";
  let foundVowels = [];
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    let char = word[i].toLowerCase();

    if (vowels.includes(char) && !foundVowels.includes(char)) {
      foundVowels.push(char);
    }
  }
  return foundVowels.length >= 3;
}

console.log(hasThreeDifferentVowels("delicious")); // true (i, e, o)
console.log(hasThreeDifferentVowels("bootcamp prep")); // true (o, a, e)
console.log(hasThreeDifferentVowels("bootcamp")); // false (o, a)
console.log(hasThreeDifferentVowels("dog")); // false (o)
console.log(hasThreeDifferentVowels("go home")); // false (o, e)
console.log(hasThreeDifferentVowels("aaaaaaaaaaie")); // false (o, e)
