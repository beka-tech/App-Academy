function foobar(callback) {
  console.log("foo");
  callback(); // run the callback
  console.log("bar");
}

function sayHello() {
  console.log("hello");
}

foobar(sayHello);
