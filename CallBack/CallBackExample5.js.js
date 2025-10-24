function foobar(Callback) {
  console.log("fo");
  Callback();
}

function sayHello() {
  console.log("Hello");
}

foobar(sayHello);
