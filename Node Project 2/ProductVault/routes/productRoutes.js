const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

function router(req, res) {
  const { method, url } = req;

  if (url === "/api/products" && method === "GET")
    return getProducts(req, res);

  if (url.match(/^\/api\/products\/.+$/)) {
    const id = url.split("/")[3];

    if (method === "GET") return getProduct(req, res, id);
    if (method === "PUT") return updateProduct(req, res, id);
    if (method === "DELETE") return deleteProduct(req, res, id);
  }

  if (url === "/api/products" && method === "POST")
    return createProduct(req, res);

  return false;
}

module.exports = router;