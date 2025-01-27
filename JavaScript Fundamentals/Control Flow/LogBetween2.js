function logBetween(num1, num2) {
  let i = num1;
  if (num1 < num2) {
    while (i <= num2) {
      console.log(i);
      i++;
    }
  } else {
    console.log("Error");
  }
}

// Examples:
logBetween(-1, 2); // prints out:
// -1
// 0
// 1
// 2

logBetween(14, 6); // => prints nothing

function logBetween2(num1, num2) {
  for (i = num1; i <= num2; i++) {
    console.log(i + "  Using For Loop");
  }
}

logBetween2(4, 6); // prints out:
// 4
// 5
// 6
