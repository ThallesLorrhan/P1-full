const Product = require("../models/productModel");

async function getAllProducts() {
  return Product.find().sort({ createdAt: -1 }).lean();
}

async function getProductById(id) {
  return Product.findById(id).lean();
}

async function createProduct(data) {
  const product = new Product(data);
  return product.save();
}

async function updateProduct(id, updates) {
  return Product.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true,
  }).lean();
}

async function deleteProduct(id) {
  const deleted = await Product.findByIdAndDelete(id);
  return Boolean(deleted);
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
