for (let i = 1; i <= 5; i++) {
  // Outer loop for rows
  let row = "";
  for (let j = 1; j <= 5; j++) {
    // Inner loop for columns
    row += i * j + "\t"; // \t adds a tab space
  }
  console.log(row);
}
