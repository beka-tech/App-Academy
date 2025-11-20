function myFilter(arr, cb) {
  let newVal = [];
  for (let i in arr) {
    let el = arr[i];
    if (cb(el) == true) newVal.push(el);
  }
  return newVal;
}

// -> [8, 9]
function filiterIt(num) {
  return num > 5;
}

console.log(myFilter([5, 8, 2, 9], filiterIt));
