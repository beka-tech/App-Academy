// your code here
function abbreviate(words) {
  let newWord = "";
  let vowel = "aeiou";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (!vowel.includes(word)) {
      newWord += word;
    }
  }
  return newWord;
}

console.log(abbreviate("wonderful")); // 'wndrfl'
console.log(abbreviate("mystery")); // 'mystry'
console.log(abbreviate("Accordian")); // 'ccrdn'
