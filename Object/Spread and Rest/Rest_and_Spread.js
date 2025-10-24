const cart = [10, 15, 5]; // existing prices

// const merged = [...cart, ...addGroceries()];
// console.log(merged);

// 1. Collect all new item prices
// 2. Merge with existing cart using spread
// 3. Calculate total cost using reduce
// 4. Return total and new cart

const updatedCart = [];
function addGroceries(...cart1) {
  const newItem = [...cart1, ...cart];
  updatedCart.push(newItem);
  const total = newItem.reduce((acc, curr) => acc + curr, 0);
  console.log(`Total Price  ${total}`);

  console.log(`updatedCart ${updatedCart}`);
}

addGroceries(8, 12, 6);
