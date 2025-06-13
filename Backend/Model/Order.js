const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  item: { type: String, require: true },
  address: { type: String, require: true },
  number: { type: String, require: true },
  prdQuntity: { type: Number, require: true },
  price: { type: Number, require: true },
  payment: { type: String },
});

module.exports = mongoose.model("Order", OrderSchema);
