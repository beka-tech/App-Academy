try {
  let score = -5;

  if (score < 0) {
    throw new Error("Score Belowe Zero");
  }
  console.log(`Score ${score}`);
} catch (err) {
  // console.log(`${err.message} `);
  console.log(` ${err.name}`);
}
