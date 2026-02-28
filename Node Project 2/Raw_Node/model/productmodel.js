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
    WriteDataFile("./data/products.json", products);
    resolve(newproduct);
  });
}

module.exports = { findAll, findByID, create };
