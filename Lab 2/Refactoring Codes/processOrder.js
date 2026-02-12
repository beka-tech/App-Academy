// 1. Calculate total
function calculateTotal(order) {
  return order.items.reduce((sum, item) => sum + item.price, 0);
}
// 2. Save order
function saveOrder(order) {
  console.log(`Saving order ${order.id} with total ${total}`);
}

// 3. Send confirmation email
function sendConfirmationEmail(order) {
  console.log(`Email sent to ${order.customerEmail}`);
}

// 4. Generate invoice
function genrateInvoice() {
  console.log(`Invoice generated for ${order.id}`);
}

function processOrder(order) {
  const total = calculateTotal(order);
  saveOrder(order, total);
  sendConfirmationEmail(order);
  genrateInvoice(order);
}
/*
calculateTotal,
saveOrder, 
sendEmail, 
generateInvoice, 
processOrder).
*/
