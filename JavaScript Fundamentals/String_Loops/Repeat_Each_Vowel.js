function RepeatVowel(word) {
  let vowels = "aeiouAEIOU";
  let newchar = "";

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (vowels.includes(char)) {
      newchar += char + char;
    } else {
      newchar += char;
    }
  }
  return newchar;
}

console.log(RepeatVowel("hello")); // 'heelloo'
