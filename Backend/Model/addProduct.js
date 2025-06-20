const mongoose = require("mongoose");

const AddSchema = new mongoose.Schema({
  user_id: { type: String, require: true },
  img: { type: String, require: true },
  prdName: { type: String, require: true },
  prdCategory: { type: String, require: true },
  Price: { type: Number, require: true },
  discount: { type: Number, require: true },
  stock: { type: Number, require: true },
  overview: { type: String, require: true },
  material: { type: String },
  color: { type: String, require: true },
  whitelist: { type: Boolean, default: false },
});

module.exports = mongoose.model("AddProduct", AddSchema);
