const order = {
  items: [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2 },
    { name: "Keyboard", price: 75, quantity: 1 },
  ],
};
// 1. Validate order
function ValidateOrder(order) {
  if (!order.items || order.items.length === 0) {
    throw new Error("No items in order");
  }
}
// 2. Calculate total
function calculateTotal(order) {
  let total = 0;
  for (const item of order.items) {
    total += item.price * item.quantity;
  }
  return total;
}
function processOrder(order) {
  ValidateOrder(order);
  let total = calculateTotal(order);
  // let discountedPrice = applyDiscount(order);
  let mouse = order.items.find((item) => item.name === "Mouse");

  let mouseTotal = mouse.price * mouse.quantity;

  return `the total price ${total} ${mouseTotal} `;
}
console.log(processOrder(order));
