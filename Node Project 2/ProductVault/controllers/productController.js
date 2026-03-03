const Product = require("../models/productModel");

function getBody(req) {
  return new Promise((resolve) => {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => resolve(JSON.parse(body || "{}")));
  });
}

exports.getProducts = (req, res) => {
  const products = Product.getAll();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(products));
};

exports.getProduct = (req, res, id) => {
  const product = Product.getById(id);
  if (!product) {
    res.writeHead(404);
    return res.end("Product not found");
  }
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(product));
};

exports.createProduct = async (req, res) => {
  const body = await getBody(req);
  const newProduct = Product.create(body);
  res.writeHead(201, { "Content-Type": "application/json" });
  res.end(JSON.stringify(newProduct));
};

exports.updateProduct = async (req, res, id) => {
  const body = await getBody(req);
  const updated = Product.update(id, body);
  if (!updated) {
    res.writeHead(404);
    return res.end("Product not found");
  }
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(updated));
};

exports.deleteProduct = (req, res, id) => {
  Product.delete(id);
  res.writeHead(200);
  res.end("Product deleted");
};