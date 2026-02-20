const asyncWaiter = (name) => {
  setTimeout(() => {
    console.log(`1 ${name} attends to tables`);
  }, 1000);
};
asyncWaiter("beka");
console.log("2 Wow! All The Tables Are Attended to in a short time");

const syncWaiter = (name) => {
  console.log(`1 ${name} attends to tables pretty slowly.`);
};

syncWaiter("Devin");
console.log("2 At least all the orders are correct!");
