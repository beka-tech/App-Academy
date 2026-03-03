const http = require("http");
const fs = require("fs");
const path = require("path");
const router = require("./routes/productRoutes");

const server = http.createServer((req, res) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  const handled = router(req, res);
  if (handled !== false) return;

  if (req.url === "/") {
    const filePath = path.join(__dirname, "public", "index.html");
    const html = fs.readFileSync(filePath);
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(html);
  }

  res.writeHead(404);
  res.end("Not Found");
});

server.listen(5000, () =>
  console.log("Server running at http://localhost:5000")
);