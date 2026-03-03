const http = require("http");
const PORT = 5000;
const {
  getproduct,
  getProductByID,
  createProduct,
  UpdateProductByID,
  DeleteProductByID,
} = require("./Controller/productController");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    getproduct(req, res);
  } else if (req.url.match(/^\/product\/\d+$/) && req.method === "GET") {
    const id = req.url.split("/").pop();
    getProductByID(req, res, id);
  } else if (req.url === "/create" && req.method === "POST") {
    createProduct(req, res);
  } else if (req.url.match(/^\/update\/\d+$/) && req.method === "PUT") {
    const id = req.url.split("/").pop();
    UpdateProductByID(req, res, id);
  } else if (req.url.match(/^\/delete\/\d+$/) && req.method === "DELETE") {
    const id = req.url.split("/").pop();
    DeleteProductByID(req, res, id);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});
server.listen(PORT, "localhost", () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
