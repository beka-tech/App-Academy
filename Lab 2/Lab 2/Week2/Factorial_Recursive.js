function factorial(n) {
  if (n == 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(3));

factorial(1); // 1
factorial(3); // 6
factorial(5); // 120
