function longRunningTask() {
  let count = 0;
  for (let j = 0; j < 1e9; j++) {
    count++;
  }
  console.log("Long Task Done");
  console.log(count);
}

function importanTask() {
  console.log("IMportant!");
}

longRunningTask();
importanTask();
