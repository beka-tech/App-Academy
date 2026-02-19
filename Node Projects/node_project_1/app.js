const http = require("http");

const server = http.createServer((req, res) => {
  const num1 = 5;
  const num2 = 5;
  const sum = num1 + num2;
  res.write("Hello " + sum + "sum");
  res.end();
});

server.listen(8000, () => {
  console.log("Server 3000");
});
