let n = 1385757879;

let count = 0;

while (n > count) {
  let remd = n % 10;
  if (remd == 5) {
    count += 1;
  }
  n = Math.floor(n / 10);
}
console.log(count);
