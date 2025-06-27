const mongoose = require("mongoose");

const AddCateSchema = new mongoose.Schema(
  {
    category: { type: String, require: true },
    desc: { type: String, require: true },
    img: { type: String, require: true },
    status: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AddCategory", AddCateSchema);
