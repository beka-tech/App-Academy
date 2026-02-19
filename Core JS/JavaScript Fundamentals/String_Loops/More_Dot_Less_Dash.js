// Your code here
function moreDotLessDash(word) {
  let count_Dot = 0;
  let count_Dash = 0;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (char === ".") {
      count_Dot += 1;
    } else if (char === "-") {
      count_Dash += 1;
    }
  }
  return count_Dot > count_Dash;
}

console.log(moreDotLessDash("2-D arrays are fun. I think.")); // true
console.log(moreDotLessDash("Morse code is great.")); // true
console.log(moreDotLessDash(".... . -.--")); // true
console.log(moreDotLessDash(".--. .-. --- --. .-. .- -- -- . .-.")); // false
console.log(moreDotLessDash("high-flying acrobat.")); // false
