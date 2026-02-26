const logEvent = require("./LogEvent");
const EventEmiiter = require("events");

class MyEmitter extends EventEmiiter {}
const myEmitter = new MyEmitter();

myEmitter.on("log", (msg) => {
  logEvent(msg);
});

myEmitter.emit("log", " log Event Emitted");
