let foo = function (arg) {
  console.log("Before We Call The CallBack");
  arg();
  console.log("After We Call The CallBack");
};

let bar = function () {
  console.log("Intersting...");
};

foo(bar);
