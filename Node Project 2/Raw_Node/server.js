const http = require("http");
const PORT = 5000;

const server = http.createServer((req, res) => {
  res.writeHead(201, { "Content-Type": "text/plain" });
  res.end("Hello, World");
});
server.listen(PORT, "localhost", () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
