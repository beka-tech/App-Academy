const cart = [
  { name: "Bread", price: 10 },
  { name: "Butter", price: 15 },
];

function addGroceries(...cart2) {
  // 1. Collect new grocery objects
  // 2. Merge with existing cart using spread
  // 3. Calculate total using reduce
  // 4. Extract item names
  // 5. Return all data

  const newGrocery = [...cart, ...cart2];
  // console.log(newGrocery);

  const total = newGrocery.reduce((acc, item) => acc + item.price, 0);
  const itemName = newGrocery.map((item) => item.name);

  // console.log(total);
  // console.log(itemName);
  // console.log(newGrocery);

  return {
    total,
    itemName,
    newGrocery,
  };
}

console.log(
  addGroceries({ name: "Eggs", price: 12 }, { name: "Juice", price: 8 })
);
