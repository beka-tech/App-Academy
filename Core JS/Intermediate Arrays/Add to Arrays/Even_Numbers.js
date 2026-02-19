// your code here
function evenNumbers(max) {
  let result = [];
  for (let i = 2; i < max; i++) {
    if (i % 2 == 0) {
      result.push(i);
    }
  }
  // return result;
  return `${result.join(" ")}`;
}

console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]
