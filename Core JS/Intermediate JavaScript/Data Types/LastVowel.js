// your code here

let isvowel = function (char) {
  let vowel = "aeiou";
  return vowel.includes(char.toLowerCase());
};

let lastVowel = function (str) {
  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];

    if (isvowel(char)) {
      return char;
    }
  }
};

console.log(lastVowel("battery")); // 'e'
console.log(lastVowel("TUNNEL")); // 'E'
console.log(lastVowel("dog")); // 'o'
console.log(lastVowel("conventional")); // 'a'
console.log(lastVowel("rhythm")); // null
