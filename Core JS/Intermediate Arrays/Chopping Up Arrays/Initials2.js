// your code here
let initials = function (Sentence) {
  let words = Sentence.split(" ");
  let newWords = [];

  for (let i = 0; i < words.length; i++) {
    newWords.push(words[i][0]);
  }

  return newWords.join("").toUpperCase();
};

console.log(initials("anna paschall")); // 'AP'
console.log(initials("Mary La Grange")); // 'MLG'
console.log(initials("brian crawford scott")); // 'BCS'
console.log(initials("Benicio Monserrate Rafael del Toro Sánchez")); // 'BMRDTS'
