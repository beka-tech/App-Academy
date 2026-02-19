// your code here

let isFirst = function (str) {
  let vowel = "aeiouAEIOU";
  return vowel.includes(str);
};

let firstVowel = function (string) {
  for (let i = 0; i < string.length; i++) {
    let str = string[i];
    if (isFirst(str)) {
      return str;
    }
  }
  return null;
};

console.log(firstVowel("battery")); // 'a'
console.log(firstVowel("tunnel")); // 'u'
console.log(firstVowel("dog")); // 'o'
console.log(firstVowel("conventional")); // 'o'
console.log(firstVowel("rhythm")); // null
