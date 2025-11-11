function blockScope() {
  let test = "upper scope";
  if (true) {
    let test = "lower scope";
    console.log(test); // "lower scope"
  }
  console.log(test); // "upper scope"
}

blockScope();
