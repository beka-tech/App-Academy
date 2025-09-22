// your code here
let reverseSentence = function (Sentance) {
  let Word = Sentance.split(" ");
  let NewWord = [];
  for (let i = Word.length; i >= 0; i--) {
    NewWord.push(Word[i]);
  }
  return NewWord.join(" ");
};

console.log(reverseSentence("I am pretty hungry")); // 'hungry pretty am I'
console.log(reverseSentence("follow the yellow brick road")); // 'road brick yellow the follow'
