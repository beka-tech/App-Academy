function batchTimeouts(callbacks, delays) {
  const timeouts = [];

  for (let i = 0; i < callbacks.length; i++) {
    const timeout = setTimeout(callbacks[i], delays[i]);
    timeouts.push(timeout);
  }

  return timeouts;
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

console.log(timeoutObjs); // [ Timeout {...}, Timeout {...}, Timeout {...} ]
