const prices = { apple: 150, banana: 100, mango: 200 };

// Apply a 10% discount to every price. Produce a new object, keep original intact.

const newPrices = Object.fromEntries(
  Object.entries(prices).map(([k, v]) => {
    const v2 = (v * 10) / 100;
    return [k, v2];
  })
);

console.log(newPrices);
