const arr = [5, 3, 4, 8, 10];

let fil = arr.filter(function even(x) {
  return x % 2 == 0;
});

console.log(fil);
