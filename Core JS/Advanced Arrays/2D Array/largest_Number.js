let num = [3, 4, 5];
let num1 = num[0];
let num2 = num[1];
let num3 = num[2];

let max = num1;
if (num2 > max) {
  max = num2;
}
if (num3 > max) {
  max = num3;
}

console.log(max);
