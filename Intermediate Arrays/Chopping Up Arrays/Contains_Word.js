// your code here
let containsWord = function (Sentance, targetWord) {
  let words = Sentance.split(" ");
  // let newWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] === targetWord) {
      return true;
    }
  }
  return false;
};

console.log(containsWord("sounds like a plan", "like")); // true
console.log(containsWord("they are great", "they")); // true
console.log(containsWord("caterpillars are great animals", "cat")); // false
console.log(containsWord("Cast the net", "internet")); // false
