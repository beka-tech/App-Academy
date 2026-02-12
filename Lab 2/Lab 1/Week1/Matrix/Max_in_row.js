function maxRow(matrix) {
  // your code here...
  let maxR = [];
  for (let row = 0; row < matrix.length; row++) {
    let maxval = -Infinity;
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] > maxval) {
        maxval = matrix[row][col];
      }
    }
    maxR.push(maxval);
  }
  return maxR;
}

let matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(maxRow(matrix)); // [21, 19, 15]
