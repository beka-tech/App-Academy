// your code here
let reverseSentence = function (Sentence) {
  let words = Sentence.split(" ");
  let ReversedWords = [];

  for (let i = words.length - 1; i > 0; i--) {
    let word = words[i];
    ReversedWords.push(word);
  }
  return ReversedWords;
};

console.log(reverseSentence("I am pretty hungry")); // 'hungry pretty am I'
console.log(reverseSentence("follow the yellow brick road")); // 'road brick yellow the follow'
