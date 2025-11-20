function myMap(arr, cb) {
  let newVal = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    newVal.push(cb(el));
  }
  return newVal;
}

function mapIt(num) {
  console.log(num * 2);
}

myMap([1, 2, 3], mapIt); // -> [2, 4, 6]
