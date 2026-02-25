const logEvent = require("./LogEvent");
const EventEmiiter = require("events");

class MyEmitter extends EventEmiiter {}
const myEmitter = new MyEmitter();

myEmitter.on("log", (msg) => {
  logEvent(msg);
});

setTimeout(() => {
  let count = 5;
  while (count >= 0) {
    myEmitter.emit("log", "log Event Emitted");
    count--;
  }
}, 200);
