function average(a) {
  if (typeof a !== "number") {
    throw new Error("Must Be A Number");
  }

  const num = a * 2; // still your logic, just fixed
  return num;
}

try {
  console.log(average("hello")); // <-- will throw error
} catch (err) {
  console.log(err.message); // logs: Must Be A Number
}
