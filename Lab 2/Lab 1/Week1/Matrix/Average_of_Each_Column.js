function avgColumn(matrix) {
  // your code here...
  let newval = [];
  for (let col = 0; col < matrix[0].length; col++) {
    let arrsum = 0;
    for (let row = 0; row < matrix.length; row++) {
      arrsum += matrix[row][col];
    }

    newval.push(arrsum / matrix.length);
    // console.log(arrsum);
  }
  return newval;
}

let matrix7 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(avgColumn(matrix7)); // [4, 5, 6]
