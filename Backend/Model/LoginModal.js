const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, require: true },
  firstname: { type: String, require: false },
  secondname: { type: String, require: false },
  phonenumber: { type: Number, require: false },
  gender: { type: String, enum: ["men", "women"], require: false },
  email: { type: String, require: true },
  password: { type: String, require: true },
  addfname: { type: String, require: false },
  addsname: { type: String, require: false },
  addpnumber: { type: String, require: false },
  address: { type: String, require: false },
  address2: { type: String, require: false },
  pincode: { type: String, require: false },
  city: { type: String, require: false },
  state: { type: String, require: false },
  country: { type: String, require: false },
  role: { type: String, enum: ["admin", "user"], default: "user" },
});

module.exports = mongoose.model("User", UserSchema);
