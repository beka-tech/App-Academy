function fun1() {
  let age = 29;

  function fun2() {
    age++;
    console.log(age);
  }
  age = 30;

  return fun2;
}
let res = fun1();
res();
res();
res();
