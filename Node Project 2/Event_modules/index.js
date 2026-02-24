const EventEmitter = require("events");

// Create an event emitter instance
const myEmitter = new EventEmitter();

// Register an event listener
myEmitter.off("greet", () => {
  console.log("Hello there!");
});

// Emit the event
myEmitter.emit("greet"); // Outputs: Hello there!
