const requset = new XMLHttpRequest();

requset.addEventListener("readystatechange", () => {
  if (requset.readyState === 4 && requset.status === 200) {
    console.log(requset, requset.responseText);
    console.log(requset.status);
  }
});

requset.open(
  "GET",
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
requset.send();
