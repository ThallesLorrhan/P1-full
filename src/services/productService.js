const productRepository = require("../repositories/productRepository");

async function getAllProducts() {
  return productRepository.getAllProducts();
}

async function getProductById(id) {
  return productRepository.getProductById(id);
}

async function createProduct(data) {
  const product = {
    name: data.name,
    description: data.description,
    price: data.price,
  };
  return productRepository.createProduct(product);
}

async function updateProduct(id, data) {
  const updates = {
    name: data.name,
    description: data.description,
    price: data.price,
  };
  return productRepository.updateProduct(id, updates);
}

async function deleteProduct(id) {
  return productRepository.deleteProduct(id);
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
