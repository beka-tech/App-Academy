// Your code here

let commonFactors = function (num1, num2) {
  let filterNumber = [];
  for (let i = 0; i < num1; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      filterNumber.push(i);
    }
  }
  return filterNumber;
};

console.log(commonFactors(50, 30)); // [1, 2, 5, 10]
console.log(commonFactors(8, 4)); // [1, 2, 4]
console.log(commonFactors(4, 8)); // [1, 2, 4]
console.log(commonFactors(12, 24)); // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44)); // [1, 2, 11, 22]
console.log(commonFactors(7, 9)); // [1]
