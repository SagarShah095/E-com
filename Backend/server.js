const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const addPrdRoute = require("./Router/addPrdRoute");
const addOrderRoute = require("./Router/OrderRoute");
const LoginRoute = require("./Router/LoginRoute");
const { createAdmin } = require("./Controller/LoginController");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    createAdmin();
  })
  .catch((err) => console.log(err));

app.use("/api/auth", LoginRoute);
app.use("/api/product", addPrdRoute);
app.use("/api/order", addOrderRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server runing on Port ${PORT}`));
