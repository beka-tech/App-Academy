const product = require("../model/productmodel");

async function getproduct(req, res) {
  try {
    const products = await product.findAll();
    res.writeHead(200, { "Content-Type": "text/JSON" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

async function getProductByID(req, res, id) {
  try {
    const products = await product.findByID(id);
    if (!products) {
      res.writeHead(404, { "Content-Type": "text/JSON" });
      res.end("Not Founf");
    } else {
      res.writeHead(200, { "Content-Type": "text/JSON" });
      res.end(JSON.stringify(products));
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getproduct, getProductByID };
