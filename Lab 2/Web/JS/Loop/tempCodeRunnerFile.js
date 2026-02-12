function evenNotFour(max) {
  // your code here
  for (let i = 0; i < max; i++) {
    if (i % 2 == 0 && i % 4 !== 0) {
      console.log(i);
    }
  }
}
evenNotFour(20);
// Output: 2, 6, 10, 14, 18
