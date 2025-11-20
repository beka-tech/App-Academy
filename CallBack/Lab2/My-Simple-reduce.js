function mySimpleReduce(arr, cb) {
  // let result = 0;
  // let acc = 0
  let acc = arr[0];
  for (let i = 1; i < arr.length; i++) {
    // let acc = arr[0];
    let curr = arr[i];

    acc = cb(acc, curr);
  }
  return acc;
}

let result1 = mySimpleReduce([5, 3, 2, 4], function (sum, el) {
  return sum + el;
});
console.log(result1); // 14

let result2 = mySimpleReduce([4, 6, 2], function (product, el) {
  return product * el;
});
console.log(result2); // 48

let result3 = mySimpleReduce([4, 6, 2, 8, 3], function (max, el) {
  return el > max ? el : max;
});
console.log(result3); // 8
