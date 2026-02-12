// Your code here
class CallCenter {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hello this is ${this.name}`);
  }
  callMeLater(delay) {
    return setTimeout(() => {
      this.sayHello();
    }, delay);
  }
}

let judy = new CallCenter("Judy");
judy.sayHello(); // prints "Hello this is Judy"
judy.callMeLater(1000); // waits one second then prints "Hello this is Judy"

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = CallCenter;
} catch {
  module.exports = null;
}
