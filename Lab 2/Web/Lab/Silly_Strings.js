// Your code here
function sillyString(words) {
  let newchar = "";
  let vowel = "aeiou";
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (vowel.includes(word)) {
      newchar += word + "b" + word;
    } else {
      newchar += word;
    }
  }
  return newchar;
}

console.log(sillyString("stop")); // stobop
console.log(sillyString("that")); // thabat
console.log(sillyString("can")); // caban
console.log(sillyString("cats")); // cabats
console.log(sillyString("italy")); // ibitabaly
console.log(sillyString("scooter")); // scobooboteber
