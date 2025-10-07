function addPairs(array1, array2) {
  // your code here
  let sum = [];
  for (let i = 0; i < array1.length; i++) {
    let el = array1[i];
    let el2 = array2[i];
    sum.push(el + el2);
  }
  return sum;
}

console.log(addPairs([1, 2, 3, 4], [4, 5, 6]));
// [5, 7, 9]
