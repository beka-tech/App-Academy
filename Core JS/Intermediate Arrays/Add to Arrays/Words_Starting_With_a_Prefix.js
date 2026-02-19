// Example function
function wordsStartingWith(words, prefix) {
  // Your code here

  let filteredWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.startsWith(prefix)) {
      filteredWords.push(word);
    }
  }
  return filteredWords;
}

console.log(wordsStartingWith(["apple", "banana", "apricot"], "apr"));
// [ 'apple', 'apricot' ]

console.log(wordsStartingWith(["dog", "cat", "cow"], "c"));
// [ 'cat', 'cow' ]
