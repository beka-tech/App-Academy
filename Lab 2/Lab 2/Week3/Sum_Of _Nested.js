function sumNested(arr) {
  let total = 0;
  for (let val of Object.values(arr)) {
    if (typeof val === "number") {
      total += val;
    } else if (typeof val === "object") total += sumNested(val);
  }
  return total;
}

const data = {
  a: [1, 2, 3],
  b: { c: [4, { d: 5 }] },
};

// Expected output: 15

console.log(sumNested(data)); // → 15
