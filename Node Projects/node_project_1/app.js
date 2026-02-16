const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello");
  res.end();
});

server.listen(3000, () => {
  console.log("Server 3000");
});
