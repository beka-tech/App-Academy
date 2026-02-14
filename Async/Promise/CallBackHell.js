function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Walk Dogs");
    }, 2000);
  });
}
function CleanHouse() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Cleaned House");
    }, 2500);
  });
}

function TakeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Taked Out Trash");
    }, 3000);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return CleanHouse();
  })
  .then((value) => {
    console.log(value);
    return TakeOutTrash();
  })
  .then((value) => {
    console.log(value);
    return console.log("Done");
  });
