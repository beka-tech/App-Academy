function sayHello() {
  console.log("Hello!");
}

function greet(callback) {
  console.log("Before calling the callback...");
  callback(); // calling the function that was passed in
  console.log("After calling the callback...");
}

greet(sayHello);
