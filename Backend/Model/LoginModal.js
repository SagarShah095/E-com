const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, require: true },
  firstname: { type: String, require: false },
  secondname: { type: String, require: false },
  phonenumber: { type: Number, require: false },
  gender: { type: String, enum: ["men", "women"], require: false },
  email: { type: String, require: true },
  password: { type: String, require: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
});

module.exports = mongoose.model("User", UserSchema);
