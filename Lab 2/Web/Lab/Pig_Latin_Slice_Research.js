function pigLatinWord(word) {
  let vowel = "aeiou";
  if (vowel.includes(word[0])) {
    return word + "yay";
  }
  for (let i = 0; i < word.length; i++) {
    let str = word[i];
    if (vowel.includes(str)) {
      let swap = word.slice(i) + word.slice(0, i);
      return swap + "ay";
    }
  }
}
console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
console.log(pigLatinWord("trash")); //=> "ashtray"
console.log(pigLatinWord("qrttrash")); //=> "ashqrttray"
