let myForEach = function (array, cb) {
  let res = "";
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    res = cb(el);
  }

  return res;
};

let count = 0;
myForEach(["hi", "hello", "yes", "maybe"], function (el) {
  if (el.length > 3) {
    count++;
  }
});
console.log(count);
