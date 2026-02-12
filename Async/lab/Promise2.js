let myPromise = new Promise((resolve, reject) => {
  let istrue = false;
  if (istrue) resolve("True");
  else reject("Not True");
});

myPromise.then((m) => console.log(m)).catch((e) => console.log(e));
