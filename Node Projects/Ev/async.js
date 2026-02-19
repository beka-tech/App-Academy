const asyncWaiter = (name) => {
  setTimeout(() => {
    console.log(`${name} attends to tables`);
  }, 1000);
};
asyncWaiter("beka");
console.log("Wow! All The Tables Are Attended to in a short time");
