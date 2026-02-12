let count = 0;

const counter = setInterval(() => {
  count++;
  console.log("Count:", count);

  // stop after 5 counts
  if (count === 5) {
    clearInterval(counter);
    console.log("Counter stopped!");
  }
}, 1000);
