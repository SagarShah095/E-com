const express = require("express");
const verifyToken = require("../Middleware/Middleware");
const {
  register,
  login,
  updatePass,
  verifyUser,
  getlogData,
} = require("../Controller/LoginController");


const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.put("/updatePass", updatePass);
router.get("/verify", verifyToken, verifyUser);
router.get("/getuser", getlogData);

module.exports = router;
