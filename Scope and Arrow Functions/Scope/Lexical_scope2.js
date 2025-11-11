let x = "Global";

function foo() {
  console.log(x);
}

function bar() {
  let x = "Local";
  foo();
}

foo();
