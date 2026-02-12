// Example:
function printFives(max) {
  let i = 0;
  while (i < max) {
    if (i % 5 === 0) {
      console.log(i);
    }
    i++;
  }
}

printFives(20); // prints out:
0;
5;
10;
15;
