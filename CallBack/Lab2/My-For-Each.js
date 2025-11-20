let myForEach = function (arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
};

function callMe(element, index) {
  console.log(element + " is at index " + index);
}

//  function (el, i) {
// }

myForEach(["a", "b", "c"], callMe);
