// your code here

let factorsOf = function (max) {
  let result = [];
  for (let i = 0; i <= max; i++) {
    if (max % i === 0) {
      result.push(i);
    }
  }
  return `${result.join(" ")}`;
};

console.log(factorsOf(5)); // [ 1, 5 ]
console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
console.log(factorsOf(9)); // [ 1, 3, 9 ]
console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
console.log(factorsOf(2017)); // [ 1, 2017 ]
