const { readData, writeData } = require("../utils/fileUtils");
const crypto = require("crypto");

class ProductModel {
  static getAll() {
    return readData();
  }

  static getById(id) {
    const products = readData();
    return products.find(p => p.id === id);
  }

  static create(product) {
    const products = readData();
    const newProduct = {
      id: crypto.randomUUID(),
      name: product.name,
      description: product.description,
      price: product.price
    };
    products.push(newProduct);
    writeData(products);
    return newProduct;
  }

  static update(id, updatedData) {
    const products = readData();
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return null;

    products[index] = { ...products[index], ...updatedData };
    writeData(products);
    return products[index];
  }

  static delete(id) {
    const products = readData();
    const filtered = products.filter(p => p.id !== id);
    writeData(filtered);
    return true;
  }
}

module.exports = ProductModel;