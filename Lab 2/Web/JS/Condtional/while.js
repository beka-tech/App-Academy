function loop(str) {
  i = 0;
  while (i <= 10) {
    console.log((str += 1));
    i++;
  }
}
// loop("Hello");
console.log(loop(1));
