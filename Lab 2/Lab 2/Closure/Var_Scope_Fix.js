function showMessage() {
  if (true) {
    var message = "I am inside";
    return message;
  }
}
let msg = showMessage();
console.log(msg); // Should print: I am inside
