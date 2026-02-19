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
  [5, 2, 3],
  [2, 3, 4],
  [3, 4, 5],
];

console.log(sumRow(matrix)); // [35, 34, 41]
