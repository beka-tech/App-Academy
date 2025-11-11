function function1() {
  // function1's scope
  const myName = "func1";
  console.log("function1 myName: " + myName);
}

function function2() {
  // function2's scope
  const myName = "func2";
  console.log("function2 myName: " + myName);
}

function1(); // function1 myName: func1
function2(); // function2 myName: func2
