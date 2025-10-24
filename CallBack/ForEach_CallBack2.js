let myForEach = function (array, cb) {
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    cb(el);
  }
};

let peeps = ["kafele", "cind", "jon", "paloma"];

myForEach(peeps, function (el) {
  console.log(el.toUpperCase());
});
