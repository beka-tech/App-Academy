function sumRow(matrix) {
  // your code here...
  let total = [];
  for (let row = 0; row < matrix.length; row++) {
    let sum = 0;
    for (let col = 0; col < matrix.length; col++) {
      sum += matrix[row][col];
    }
    total.push(sum);
  }
  return total;
}

matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(sumRow(matrix)); // [35, 34, 41]
