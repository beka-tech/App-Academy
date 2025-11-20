let myMap = function (arr, cb) {
  let newvalue = [];

  for (let i = 0; i < arr.length; i++) {
    // let el = arr[i];
    newvalue.push(cb(arr[i]));
  }
  return newvalue;
};

let arr = [true, false, true, false];

let result = myMap(arr, function (word) {
  if (word === true) {
    return "ON";
  } else {
    return "OFF";
  }
});

console.log(result);
