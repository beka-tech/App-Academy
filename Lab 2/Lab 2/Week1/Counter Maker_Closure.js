let counterMaker = () => {
  let count = 0;

  return function countIt() {
    count += 1;
    console.log(count);
  };
};

let counter = counterMaker();
counter(); // ➜ 1
counter(); // ➜ 2
counter(); // ➜ 3
