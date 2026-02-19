// your code here
function pitPat(num1) {
  let num = [];
  for (let i = 0; i <= num1; i++) {
    if ((i % 4 === 0) ^ (i % 6 === 0)) {
      num.push(i);
    }
  }
  return num;
}

console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]
