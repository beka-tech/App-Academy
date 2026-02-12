function x() {
  var a = 7;
  function y() {
    a += 1;
    console.log(a);
  }
  return y;
  // y();
}

var z = x();
console.log(z);
z();
z();
z();
