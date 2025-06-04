// Your code here
function hasThreeVowels(word) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (vowels.includes(char)) {
      count += 1;
      if (count >= 3) {
        return true;
      }
    }
  }
  return false;
}
console.log(hasThreeVowels("delicious")); //  true
console.log(hasThreeVowels("bootcamp prep")); //  true
console.log(hasThreeVowels("bootcamp")); //  false
console.log(hasThreeVowels("dog")); //  false
console.log(hasThreeVowels("go home")); //  false
