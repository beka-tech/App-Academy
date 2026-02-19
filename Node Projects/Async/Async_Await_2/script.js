function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Walk Dogs");
    }, 1000);
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

async function dochore() {
  try {
    const Do_walkDog = await walkDog();
    console.log(Do_walkDog);
    const Do_CleanHouse = await CleanHouse();
    console.log(Do_CleanHouse);
    const Do_TakeOutTrash = await TakeOutTrash();
    console.log(Do_TakeOutTrash);
  } catch {
    throw "Erro";
  }
}
navigator.geolocation.getCurrentPosition(
  (position) => console.log(position),
  (error) => console.log(error),
);

dochore();
