function printFives(num) {
  for (i = 0; i < num; i = i + 5) {
    console.log(i);
  }
}

printFives(20);

function printFives2(num1) {
  let i = 0;
  while (i < num1) {
    console.log(i + " Using Whileloop");
    i = i + 5;
  }
}

printFives2(20);
