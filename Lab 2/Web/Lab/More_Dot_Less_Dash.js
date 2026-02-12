// Your code here
function moreDotLessDash(words) {
  let countdot = 0;
  let countdash = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word === ".") {
      countdot += 1;
    } else if (word === "-") {
      countdash += 1;
    }
  }
  return countdot > countdash;
}

console.log(moreDotLessDash("2-D arrays are fun. I think.")); // true
console.log(moreDotLessDash("Morse code is great.")); // true
console.log(moreDotLessDash(".... . -.--")); // true
console.log(moreDotLessDash(".--. .-. --- --. .-. .- -- -- . .-.")); // false
console.log(moreDotLessDash("high-flying acrobat.")); // false
