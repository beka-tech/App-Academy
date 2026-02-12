function processOrder(orderType, quantity, taxRate) {
  const prices = { latte: 5, cappuccino: 4.5, espresso: 3 };

  const totalBeforeTax = prices[orderType] * quantity;
  const tax = totalBeforeTax * taxRate;
  const total = totalBeforeTax + tax;

  console.log(`Making ${quantity} ${orderType}(s)...`);
  console.log(`Each costs $${prices[orderType]}`);
  console.log(`Tax: $${tax.toFixed(2)} | Total: $${total.toFixed(2)}`);
  console.log("Order complete!");
}

/*
🎯 Your Refactoring Goal

Break it into smaller functions:

calculateTax()

calculateTotal()

makeDrinks()

printReceipt()

Then have processOrder() just coordinate them.
*/
