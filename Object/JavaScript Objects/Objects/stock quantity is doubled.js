const stock = { pen: 5, pencil: 12, notebook: 3 };

const newStock = Object.fromEntries(
  Object.entries(stock).map(([k, v]) => {
    const doubled = v * 2;
    return [k, doubled];
  })
);

console.log(newStock);
