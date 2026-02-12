function hasThreeDifferentVowels(word) {
  const vowels = "aeiou";
  let foundVowels = [];
  for (let i = 0; i < word.length; i++) {
    let char = word[i].toLowerCase();

    if (vowels.includes(char) && !foundVowels.includes(char)) {
      foundVowels.push(char);
    }
  }
  return foundVowels.length >= 3;
}

console.log(hasThreeDifferentVowels("delicious")); // true 3 (i, e, o)
console.log(hasThreeDifferentVowels("bootcamp prep")); // true 3 (o, a, e)
console.log(hasThreeDifferentVowels("bootcamp")); // false 2 (o, a)
console.log(hasThreeDifferentVowels("dog")); // false 1 (o)
console.log(hasThreeDifferentVowels("go home")); // false (o, e)
