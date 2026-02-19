const items = [
  { name: "Apple", price: 10 },
  { name: "Apple", price: 10 },
  { name: "Orange", price: 30 },
  { name: "Mango", price: 20 },
  { name: "Banana", price: 40, qunitty: 2 },
  { name: "Banana", price: 40 },
  { name: "Banana", price: 40 },
];

let totalPrice = 0;
let totalPriceOf_Banana = 0;
let totalPriceOf_Apple = 0;

items.forEach((items) => {
  totalPrice += items.price;
  if (items.name === "Banana" || items.name === "Apple") {
    let n = items.qunitty;
    console.log(n);

    totalPriceOf_Banana += items.price;
    totalPriceOf_Apple += items.price;
  }
});

console.log("Total Price " + totalPrice);
console.log("Total Price of Banana " + totalPriceOf_Banana);
console.log("Total Price of Apple " + totalPriceOf_Apple);
