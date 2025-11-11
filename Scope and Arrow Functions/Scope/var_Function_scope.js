function blockScope() {
  var test = "upper scope";
  if (true) {
    var test = "lower scope";
    console.log(test); // "lower scope"
  }
  console.log(test); // "upper scope"
}

blockScope();
