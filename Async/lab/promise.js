const { use } = require("react");

function getUser() {
  return fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  });
}

getUser().then((user) => {
  console.log("User Name", user.name);
});
