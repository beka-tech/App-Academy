function count(n, arr = []) {
  if (n <= 0) {
    return arr;
  }
  arr.push(n);
  return count(n - 1, arr);
}

console.log(count(5));
