function sillyString(word) {
  let newchar = "";
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      newchar += word[i] + "b" + word[i];
    } else {
      newchar += word[i];
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
