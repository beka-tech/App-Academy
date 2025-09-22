// Your code here

let shortestWord = function (Sentance) {
  let words = Sentance.split(" ");

  let lengthWord = words[0];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length < lengthWord.length) {
      lengthWord = word;
    }
  }
  return lengthWord;
};

console.log(shortestWord("what a wonderful life")); // 'a'
console.log(shortestWord("the quick brown fox jumps")); // 'fox'
console.log(shortestWord("do what you enjoy")); // 'do'
