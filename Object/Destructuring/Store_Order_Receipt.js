const order = {
  orderId: "AA-342",
  customer: {
    name: "Liam",
    address: {
      city: "Oslo",
      country: "Norway",
    },
  },
  items: [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 40 },
  ],
  payment: {
    method: "card",
    currency: "EUR",
  },
};

function makeReceipt({ orderId, customer, items, payment }) {
  // destructure nested things here if needed again
  // compute total from items
  // return formatted string

  const total = items.reduce((acc, items) => acc + items.price, 0);

  return `Order ${orderId} For ${customer.name} (${customer.address.city}) ${items.length} itmes - total ${total} ${payment.currency} `;
}

console.log(makeReceipt(order));

const {
  payment: { currency },
} = order;
console.log(currency);
