let peeps = ["kafele", "cindy", "jon", "paloma"];

let myForEach = function (array, callBack) {
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    callBack(el);
  }
};

myForEach(peeps, function (el) {
  console.log(el);
});
