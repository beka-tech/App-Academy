function sevenBoom(max) {
  for (let i = 0; i < max; i++) {
    if (i % 7 === 0 && i % 14 !== 0) {
      console.log(i);
    }
  }
}
sevenBoom(50);
// Output should include: 7, 21, 35, 49 (but exclude 14, 28, 42)

/*
✅ Challenge 1: Seven Boom
Problem: Write a function sevenBoom(max) that logs all numbers less than max that are divisible by 7 but not divisible by 14.
*/
