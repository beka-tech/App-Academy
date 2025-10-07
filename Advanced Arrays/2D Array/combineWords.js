function combineWords(adjectives, nouns) {
  // your code here
  let word = [];
  for (let i = 0; i < adjectives.length; i++) {
    let adj = adjectives[i];
    let noun = nouns[i];
    word.push(adj, noun);
  }
  return word;
}

console.log(combineWords(["Big", "Red", "Fast"], ["Car", "Apple", "Dog"]));
// ['Big Car', 'Red Apple', 'Fast Dog']
