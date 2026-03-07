const http = require("http");
const PORT = 3000;
const { URL } = require("url");

const {
  getUser,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
} = require("./Controller/userController");

const server = http.createServer((req, res) => {
  const { method, url } = req;

  const parsedUrl = new URL(url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.searchParams;

  if (pathname === "/users" && method === "GET") {
    getUser(req, res, query);
  } else if (pathname.startsWith("/user/") && req.method === "GET") {
    const userUniqueId = pathname.split("/").pop();
    getUserByID(req, res, userUniqueId);
  } else if (pathname.startsWith("/user/create") && req.method === "POST") {
    createUser(req, res);
  } else if (pathname.startsWith("/user/update/") && req.method === "PUT") {
    const userUniqueId = pathname.split("/").pop();
    updateUser(req, res, userUniqueId);
  } else if (pathname.startsWith("/user/delete/") && req.method === "DELETE") {
    const userUniqueId = pathname.split("/").pop();
    deleteUser(req, res, userUniqueId);
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Page Not Found");
  }
});

server.listen(PORT, "localhost", () => {
  console.log(`Server  http://localhost:${PORT}/`);
});
