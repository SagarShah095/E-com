const express = require("express");
const {
  register,
  login,
  updatePass,
} = require("../Controller/LoginController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.put("/updatePass", updatePass);

module.exports = router;
