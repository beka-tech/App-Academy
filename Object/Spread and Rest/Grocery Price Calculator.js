const cart = [10, 15, 5];

function addGroceries(...newItem) {
  if (newItem.length === 0) {
    console.log("Empty");
    return;
  }
  const updatedCart = [...cart, ...newItem];
  const total = updatedCart.reduce((acc, price) => acc + price, 0);
  return { total, updatedCart };
}

console.log(addGroceries(8, 12, 6));
