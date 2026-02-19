function maxColumn(matrix) {
  // your code here...
  let max = [];
  for (let col = 0; col < matrix[0].length; col++) {
    let maxval = matrix[0][col];
    for (let row = 1; row < matrix.length; row++) {
      maxval = matrix[row][col];
    }
    max.push(maxval);
  }
  return max;
}

matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(maxColumn(matrix)); // [12, 19, 21]
