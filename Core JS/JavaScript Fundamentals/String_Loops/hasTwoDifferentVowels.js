function hasTwoDifferentVowels(word) {
  let vowels = "aeiouAEIOU";
  let foundVowels = [];

  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    if (vowels.includes(char) && !foundVowels.includes(char)) {
      foundVowels.push(char);
    }
  }
  return foundVowels.length <= 2;
}

console.log(hasTwoDifferentVowels("delicious")); // False 3 (i, e, o)
console.log(hasTwoDifferentVowels("bootcamp prep")); // False 3 (o, a, e)
console.log(hasTwoDifferentVowels("bootcamp")); // True 2 (o, a)
console.log(hasTwoDifferentVowels("dog")); // True 1 (o)
console.log(hasTwoDifferentVowels("go home")); // True (o, e)
