// async function getpromise() {
//   return "I";
// }

// const data = getpromise();

// console.log(data);

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 Resolved");
  }, 7000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 Resolved");
  }, 2000);
});

async function handlePromis() {
  // const val = await p;
  // console.log("First P ");
  // console.log(val);

  // const val2 = await p2;
  // console.log("Second P");
  // console.log(val2);
  const [val, val2] = await Promise.all([p, p2]);
  console.log(val);
  console.log(val2);
}

handlePromis();
