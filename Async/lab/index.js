const requset = new XMLHttpRequest();

requset.addEventListener("readystatechange", () => {
  if (requset.readyState === 4 && requset.status === 200) {
    console.log(requset, requset.responseText);
  }
});

requset.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
requset.send();
