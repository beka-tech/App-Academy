function sumColumn(matrix) {
  // your code here...
  let total = [];
  for (let col = 0; col < matrix[0].length; col++) {
    let sum = 0;
    for (let row = 0; row < matrix.length; row++) {
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

console.log(sumColumn(matrix)); // [26, 34, 41 ]
