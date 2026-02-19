const animals = ["cat", "elephant", "dog"];
let number_of_char = 0;

animals.forEach(function (animal) {
  number_of_char += animal.length;
});
console.log(number_of_char);
