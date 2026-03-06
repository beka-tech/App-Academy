
const http = require("http");
const url = require("url");
const { getUsers } = require("./Controller/userController");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === "/users" && req.method === "GET") {
    getUsers(req, res, parsedUrl.query);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, "localhost", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
