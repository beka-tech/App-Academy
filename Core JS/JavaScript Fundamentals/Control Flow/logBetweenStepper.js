function logBetweenStepper(num1, num2, num3) {
  let i = num1;
  while (i <= num2) {
    console.log(i);

    i = i + num3;
  }
}

// Examples:
logBetweenStepper(5, 9, 1); // prints out:
// 5
// 6
// 7
// 8
// 9

function logBetweenStepper2(para1, para2, para3) {
  for (i = para1; i <= para2; i = i + para3) {
    console.log(i);
  }
}

logBetweenStepper2(-10, 15, 5); // prints out:
// -10
// -5
// 0
// 5
// 10
// 15
