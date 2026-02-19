function longRunningTask() {
  setTimeout(() => {
    let count = 0;
    for (let j = 0; j < 1e9; j++) {
      count++;
    }
    console.log(count);

    console.log("Long Task Done");
  });
}

function importantTask() {
  console.log("Important");
}

longRunningTask();
importantTask();
