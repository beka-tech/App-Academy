// your code here

let isFirst = function (str) {
  let vowel = "aeiouAEIOU";
  return vowel.includes(str);
};

let lastVowel = function (string) {
  for (let i = string.length - 1; i > 0; i--) {
    let str = string[i];
    if (isFirst(str)) {
      return str;
    }
  }
  return null;
};
console.log(lastVowel("battery")); // 'e'
console.log(lastVowel("TUNNEL")); // 'E'
console.log(lastVowel("dog")); // 'o'
console.log(lastVowel("conventional")); // 'a'
console.log(lastVowel("rhythm")); // null
