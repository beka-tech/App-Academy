function addNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  return a + b;
}

console.log(addNumbers(5, 10)); // ✅ 15
console.log(addNumbers("5", 10)); // ❌ Error: Both arguments must be numbers
