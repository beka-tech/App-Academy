// Your code here

let chooseyEndings = function (words, suffix) {
  let filteredWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.endsWith(suffix)) {
      filteredWords.push(word);
    }
  }
  return filteredWords;
};

console.log(
  chooseyEndings(
    ["family", "hound", "catalyst", "fly", "timidly", "bond"],
    "ly"
  )
);
// [ 'family', 'fly', 'timidly' ]

console.log(
  chooseyEndings(
    ["family", "hound", "catalyst", "fly", "timidly", "bond"],
    "nd"
  )
);
// [ 'hound', 'bond' ]

console.log(chooseyEndings(["simplicity", "computer", "felicity"], "icity"));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(["simplicity", "computer", "felicity"], "ily"));
// [ ]

console.log(chooseyEndings(17, "ily"));
// [ ]
