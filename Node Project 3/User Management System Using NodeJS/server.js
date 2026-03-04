const http = require("http");
const PORT = 3000;
const { URL } = require("url");
const {
  getUser,
  getUserByID,
  createUser,
} = require("./Controller/userController");
const server = http.createServer((req, res) => {
  const { method, url } = req;
  const parsedUrl = new URL(url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  if (pathname === "/user" && req.method === "GET") {
    getUser(req, res);
  } else if (pathname.startsWith("/user/") && req.method === "GET") {
    const userUniqueId = parseInt(pathname.split("/").pop());
    getUserByID(req, res, userUniqueId);
  } else if (pathname.startsWith("/user/create") && req.method === "POST") {
    createUser(req, res);
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Page Not Found");
  }
});

server.listen(PORT, "localhost", () => {
  console.log(`Server  http://localhost:${PORT}/`);
});
