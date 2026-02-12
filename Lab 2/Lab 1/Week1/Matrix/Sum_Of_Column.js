function sumColumn(matrix) {
  // your code here...
  let sum = [];
  for (let col = 0; col < matrix[0].length; col++) {
    let colsum = 0;
    for (let row = 0; row < matrix.length; row++) {
      colsum += matrix[row][col];
    }
    sum.push(colsum);
  }
  return sum;
}

let matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(sumColumn(matrix3)); // [12, 15, 18]
