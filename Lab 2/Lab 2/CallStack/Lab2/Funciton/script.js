function a() {
  var num = 10;
  function b() {
    function c() {
      console.log(num2);
    }
    c();
  }
  b();
}

a();
