function printFives(num) {
  for (let i = 0; i < num; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}

// Example:

printFives(20); // prints out:
// 0
// 5
// 10
// 15
