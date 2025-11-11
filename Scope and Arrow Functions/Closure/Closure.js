function makeCounter() {
  let count = 0; // captured by closure
  return function () {
    // inner function closes over `count`
    count++;
    return count;
  };
}

const c = makeCounter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());
