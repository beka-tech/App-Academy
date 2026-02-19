// your code here

let isConsecutively = function (string, i) {
  return string[i] === string[i + 1];
};

function hasDoubleLetter(string) {
  if (typeof string !== "string") {
    return null;
  }
  for (let i = 0; i < string.length; i++) {
    if (isConsecutively(string, i)) {
      return true;
    }
  }
  return false;
}

console.log(hasDoubleLetter("deer")); // true
console.log(hasDoubleLetter("boot camp")); // true
console.log(hasDoubleLetter("toggle")); // true
console.log(hasDoubleLetter("taco")); // false
console.log(hasDoubleLetter("jumper")); // false
console.log(hasDoubleLetter(18)); // null
console.log(hasDoubleLetter(["array"])); // null
