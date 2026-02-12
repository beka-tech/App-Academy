// Your code here
function hasThreeVowels(string) {
  let vowels = "aeiou";
  let vowelCount = 0;
  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }
  return vowelCount >= 3;
}

console.log(hasThreeVowels("delicious")); //  true
console.log(hasThreeVowels("bootcamp prep")); //  true
console.log(hasThreeVowels("bootcamp")); //  false
console.log(hasThreeVowels("dog")); //  false
console.log(hasThreeVowels("go home")); //  false
console.log(hasThreeVowels("oooo")); //  false becuase it is not 3 differnt numbers
