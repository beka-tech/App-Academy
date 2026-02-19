// your code here
function abbreviate(word) {
  let vowels = "aeiouAEIOU";

  let chr = "";
  for (let i = 0; i < word.length; i++) {
    if (!vowels.includes(word[i])) {
      chr += word[i];
    }
  }
  return chr.toUpperCase();
}

console.log(abbreviate("wonderful")); // 'wndrfl'
console.log(abbreviate("mystery")); // 'mystry'
console.log(abbreviate("Accordian")); // 'ccrdn'
