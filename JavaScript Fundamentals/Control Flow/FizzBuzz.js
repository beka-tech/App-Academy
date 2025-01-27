// Examples:
function fizzBuzz(max) {
  let i = 0;
  while (i < max) {
    if ((i % 3 === 0) !== (i % 5 === 0)) {
      console.log(i);
    }
    i++;
  }
}

fizzBuzz(20); // prints out:
// 3
// 5
// 6
// 9
// 10
// 12
// 18
