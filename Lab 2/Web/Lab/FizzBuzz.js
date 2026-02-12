// Examples:
function fizzBuzz(max) {
  for (let i = 0; i < max; i++) {
    if ((i % 3 === 0) ^ (i % 5 === 0)) {
      console.log(i);
    }
  }
}

fizzBuzz(30); // prints out:
// 3;
// 5;
// 6;
// 9;
// 10;
// 12;
// 18;
