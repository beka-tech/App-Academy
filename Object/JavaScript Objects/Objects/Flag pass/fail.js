const marks = { john: 71, alice: 52, bob: 48, daisy: 92 };

const Passed = Object.entries(marks).filter(([k, v]) => v > 50);

for (let key in Object.fromEntries(Passed)) {
  console.log([key].join(" "));
}

// console.log(Passed);
