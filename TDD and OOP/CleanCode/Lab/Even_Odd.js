function isEven(n) {
  if (isNaN(n)) {
    console.log("Invalid.");
    return;
  }
}
function check(num) {
  const n = num;

  isEven(n);
  if (n % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
check(9);
