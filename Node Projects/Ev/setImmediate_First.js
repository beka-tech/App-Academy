const { setImmediate } = require("async");

function demo() {
  setTimeout(() => {
    console.log("1");
  });
  setImmediate(() => {
    console.log("2");
  });
}

demo();
