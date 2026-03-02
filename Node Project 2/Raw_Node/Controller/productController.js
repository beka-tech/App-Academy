const product = require("../model/productmodel");
const { generate4DigitId, getPostData, update } = require("../util");

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

async function createProduct(req, res) {
  try {
    // const products = await product.findAll();

    const body = await getPostData(req);
    const { name, description, price } = JSON.parse(body);

    const productz = { name, description, price };
    const newproduct = await product.create(productz);
    res.writeHead(200, { "Content-Type": "text/JSON" });
    res.end(JSON.stringify(newproduct));
  } catch (error) {
    console.log(error);
  }
}

async function UpdateProductByID(req, res, id) {
  try {
    const products = await product.findByID(id);
    if (!products) {
      res.writeHead(404, { "Content-Type": "text/JSON" });
      res.end("Not Founf");
    } else {
      const body = await getPostData(req);
      const { name, description, price } = JSON.parse(body);

      const productData = {
        name: name || product.name,
        description: description || product.description,
        price: price || product.price,
      };

      const updatedproduct = await product.update(id, productData);

      res.writeHead(200, { "Content-Type": "text/JSON" });
      res.end(JSON.stringify(updatedproduct));
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getproduct,
  getProductByID,
  createProduct,
  UpdateProductByID,
};
