function vowelCipher(string) {
  // your code here
  const vowel = "aeiou";
  let newstring = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (vowel.includes(char)) {
      let oldIdx = vowel.indexOf(char);
      let newIdx = oldIdx + 1;
      let newchar = vowel[newIdx % vowel.length];
      newstring += newchar;
    } else {
      newstring += char;
    }
  }
  return newstring;
}

console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"
