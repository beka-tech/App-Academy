function batchTimeouts(callbacks, delays) {
  // Your code here

  for (let i in callbacks) {
  }

  // setTimeout();

  // setTimeout(callbacks, delays);
}

const sayHello = () => console.log("hi");
const sayGoodbye = () => console.log("bye");
const shout = () => console.log("WHAT?");
const tasks = [sayHello, sayGoodbye, shout];
const delays = [500, 200, 900];

const timeoutObjs = batchTimeouts(tasks, delays);
// should print:
//  'bye' after 200 ms
//  'hi' after 500 ms
//  'WHAT?' after 900 ms

console.log(timeoutObjs); // [ Timeout {...},  Timeout {...}, Timeout {...} ]
