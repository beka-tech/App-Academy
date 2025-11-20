function orderPizza(callback) {
  console.log("Ordered a pizza... doing other things...");
  // after some time:
  setTimeout(callback, 2000);
  // callback(); // <-- call the callback function
}

function callMeWhenDone() {
  console.log("Pizza is ready! Going to pick it up.");
}

orderPizza(callMeWhenDone);
