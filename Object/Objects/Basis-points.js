const fees = { trading: 0.25, withdrawal: 1.2, management: 0.05 };
//Convert those percent values into basis points (×100), return a new object, same keys.
const fees2 = {};
Object.entries(fees).forEach(([key, value]) => {
  const value2 = value * 100;
  fees2[key] = value2;
});

console.log(fees2);
