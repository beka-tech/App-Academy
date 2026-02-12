function recurse(n) {
  if (n <= 0) {
    return null;
  }
  console.log(n);
  return recurse(n - 1);
}
recurse(9);
