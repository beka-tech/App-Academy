let isEven = function (num) {
  return num % 2 === 0;
};

let Even = function (number) {
  let Even = [];

  for (let i = 0; i < number.length; i++) {
    let num = number[i];
    if (isEven(num)) {
      Even.push(num);
    }
  }
  return Even;
};

console.log(Even([36, 48, 9, 13, 19])); // [13, 19]
console.log(Even([5, 6, 4, 11, 2017])); // [5, 11, 2017]
