const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const addPrdRoute = require("./Router/addPrdRoute");
const addOrderRoute = require("./Router/OrderRoute");
const addCate = require("./Router/addcateRoute");
const dotenv = require("dotenv");
const LoginRoute = require("./Router/LoginRoute");
const { createAdmin } = require("./Controller/LoginController");
const cors = require("cors");

const MONGO_URL = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(express.json());
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    createAdmin();
  })
  .catch((err) => console.log(err));

app.use("/api/auth", LoginRoute);
app.use("/api/product", addPrdRoute);
app.use("/api/order", addOrderRoute);
app.use("/api/cate", addCate);
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server runing on Port ${PORT}`));
