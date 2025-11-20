let myForEach = function (array, cb) {
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    cb(el);
  }
};

myForEach([1, 2, 3, 4], function (el) {
  console.log(el);
});
