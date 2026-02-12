// Feel free to use this variable:
// const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, num) {
  // your code here
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newstring = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let oldIdx = alphabet.indexOf(char);
    let newIdx = oldIdx + num;
    let newchar = alphabet[newIdx % alphabet.length];
    newstring += newchar;
  }
  return newstring;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"
