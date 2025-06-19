// Helper function to compare two characters
let isCons = function (str, str1) {
  return str === str1;
};

let hasDoubleLetter = function (string) {
  if (typeof string !== "string") {
    return null;
  }

  for (let i = 0; i < string.length - 1; i++) {
    let str = string[i];
    let str1 = string[i + 1];
    if (isCons(str, str1)) {
      return true;
    }
  }

  return false;
};

console.log(hasDoubleLetter("deer")); // true
console.log(hasDoubleLetter("boot camp")); // true
console.log(hasDoubleLetter("toggle")); // true
console.log(hasDoubleLetter("taco")); // false
console.log(hasDoubleLetter("jumper")); // false
console.log(hasDoubleLetter(18)); // null
console.log(hasDoubleLetter(["array"])); // null
