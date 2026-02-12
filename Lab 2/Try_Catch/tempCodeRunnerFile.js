function average(a) {
  if (typeof a !== "number") {
    throw new Error("Must Be a Number");
  }
  if (a instanceof ReferenceError) {
    throw new Error("Caught a ReferenceError:");
  }

  const num = a * 2;
  return num;
}

try {
  console.log(average(s)); // I want to throw my own error
} catch (err) {
  console.log(err.message);
}
