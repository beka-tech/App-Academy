// async function getpromise() {
//   return "I";
// }

// const data = getpromise();

// console.log(data);

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 3000);
});

async function handlePromis() {
  const val = await p;
  console.log("First P ");
  console.log(val);

  const val2 = await p2;
  console.log("Second P");
  console.log(val2);
}

handlePromis();
