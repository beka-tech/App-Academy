// your code here
function uncompress(words) {
  let newWord = "";

  for (let i = 0; i < words.length; i += 2) {
    let num = Number(words[i + 1]);
    let word = words[i];
    newWord += word.repeat(num);
  }
  return newWord;
}

console.log(uncompress("x3y4z2")); // 'xxxyyyyzz'
console.log(uncompress("a5b2c4z1")); // 'aaaaabbccccz'
console.log(uncompress("b1o2t1")); // 'boot'
