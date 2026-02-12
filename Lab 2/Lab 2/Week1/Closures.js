function func1() {
  let count = 1;

  return function func2() {
    return count++;
  };
}

let func = func1();
func();
func();
console.log(func());
