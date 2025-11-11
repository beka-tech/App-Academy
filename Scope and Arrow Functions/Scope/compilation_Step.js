console.log("Howdy");
saySomething("Hello", "Hi");
// Uncaught SyntaxError: Duplicate parameter name not
// allowed in this context
function saySomething(greeting, greeting) {
  "use strict";
  console.log(greeting);
}
