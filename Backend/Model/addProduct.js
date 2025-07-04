const mongoose = require("mongoose");

const AddSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  sku: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  gender: { type: [String], required: true },        // ✅ multiple gender values
  size: { type: [String], required: true },           // ✅ multiple size values
  stock: { type: Number, required: true },
  description1: { type: String, required: true },
  description2: { type: String, required: true },
  images: { type: String, required: true },
  tags: { type: String, required: true },
  price: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model("AddProduct", AddSchema);
