function luckyNumbers(matrix) {
  // your code here...
  let rowmin = [];
  for (let row = 0; row < matrix.length; row++) {
    let minrow = matrix[row][0];
    let mincolIdx = 0;
    for (let col = 1; col < matrix.length; col++) {
      if (matrix[row][col] < minrow) {
        minrow = matrix[row][col];
        mincolIdx = [col];
      }
    }

    for (let i = 0; i < matrix.length; i++) {
      if (matrix[r][mincolIdx] > minrow) {
      }
    }
  }
  return rowmin;
}

matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(luckyNumbers(matrix)); // [12]
