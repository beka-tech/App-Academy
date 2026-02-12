let cart = { apples: 4, bananas: 2, oranges: 5 };

let total = 0;
for (let key in cart) {
  total += cart[key];
}

console.log(total);
