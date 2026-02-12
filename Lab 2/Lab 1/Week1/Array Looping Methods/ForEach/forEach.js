const items = [
  { name: "Apple", price: 1 },
  { name: "Orange", price: 2 },
  { name: "Mango", price: 3 },
];
let total = 0;
items.forEach(function (item) {
  total += item.price;
});

console.log(total);
