function greet(name) {
  console.log("Hello " + name);
}

function processUserInput(callback) {
  const name = "Alice";
  callback(name);
}

processUserInput(greet);
