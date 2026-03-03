const products = require("../data/products.json");
const { WriteDataFile } = require("../util");
const { generate4DigitId, getPostData } = require("../util");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findByID(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id);
    resolve(product);
  });
}

function create(product) {
  return new Promise((resolve, reject) => {
    const newproduct = { id: generate4DigitId(), ...product };
    products.push(newproduct);
    WriteDataFile("./data/products.json", products); // pass the products to the util file to wite it in the JSON file
    resolve(newproduct);
  });
}

function update(id, productData) {
  return new Promise((resolve, rejecct) => {
    const index = products.findIndex((p) => p.id === id);
    products[index] = { id, ...productData };
    WriteDataFile("./data/products.json", products); // pass the updated  products to the util file to wite it in the JSON file
    resolve(products[index]);
  });
}
function deleteted(id) {
  return new Promise((resolve, reject) => {
    const product = products.filter((p) => p.id !== id);
    WriteDataFile("./data/products.json", product);
    resolve();
  });
}
module.exports = { findAll, findByID, create, update, deleteted };
