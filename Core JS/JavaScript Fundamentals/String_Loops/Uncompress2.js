// your code here
function uncompress(word) {
  let newchar = "";

  for (let i = 0; i < word.length; i += 2) {
    let count = Number(word[i + 1]);

    newchar += word[i].repeat(count);
  }
  return newchar;
}

console.log(uncompress("x3y4z2")); // 'xxxyyyyzz'
console.log(uncompress("a5b2c4z1")); // 'aaaaabbccccz'
console.log(uncompress("b1o2t1")); // 'boot'
