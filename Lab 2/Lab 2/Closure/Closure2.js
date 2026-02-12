function func1() {
  let count = 0;

  function func2() {
    count += 1;
    console.log(count);
  }
  return func2;
}

let c1 = func1();
// console.log(c1);
c1();
c1();
c1();
c1();
