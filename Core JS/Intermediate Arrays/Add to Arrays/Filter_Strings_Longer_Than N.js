// Example function
function longStrings(words, n) {
  // Your code here

  let filteredWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length >= n) {
      filteredWords.push(word);
    }
  }

  return filteredWords;
}

console.log(longStrings(["cat", "elephant", "dog"], 4));
// [ 'elephant' ]

console.log(longStrings(["hi", "hello", "hey"], 2));
// [ 'hi', 'hello', 'hey' ]
