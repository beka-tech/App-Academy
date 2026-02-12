const myPromise = new Promise((resolve, reject) => {
  let success = false;
  setTimeout(() => {
    if (success) {
      resolve("Data Loaded Successfully");
    } else {
      reject("Error loading data");
    }
  }, 2000);
});

myPromise
  .then((YES) => {
    console.log("Success", YES);
  })
  .catch((E) => {
    console.log("Erro", E);
  })
  .finally(() => {
    console.log("Opertion Finshed ");
  });
