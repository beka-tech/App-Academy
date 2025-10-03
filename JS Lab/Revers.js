let num = 2222;

let ans = 0;

while (num > 0) {
  let remd = num % 10;
  ans = ans * 10 + remd;

  num = Math.floor(num / 10);

  if (ans == num) {
    console.log("It is Palndrom");
  }
}
console.log(ans);
