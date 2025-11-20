let myMap = function (array, cb) {
  let mapped = [];

  for (let i = 0; i < array.length; i++) {
    if (cb(array[i]) == true) {
      mapped.push(array[i]);
    }
  }
  return mapped;
};

let peeps = ["kafele", "cind", "jon", "paloma"];

let res = myMap(peeps, function (el) {
  return el.includes("k");
});

console.log(res); //kefele
