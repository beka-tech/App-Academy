// Your code here
function hasThreeVowels(word) {
  let vowels = "aeiou";
  let foundVowels = [];

  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    if (vowels.includes(char)) {
      foundVowels.push(char);
    }
  }
  return foundVowels;
}

console.log(hasThreeVowels("delicious")); //  true
console.log(hasThreeVowels("bootcamp prep")); //  true
console.log(hasThreeVowels("bootcamp")); //  false
console.log(hasThreeVowels("dog")); //  false
console.log(hasThreeVowels("go home")); //  false
