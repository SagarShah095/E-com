const express = require("express");
const verifyToken = require("../Middleware/Middleware");
const {
  register,
  login,
  updatePass,
  verifyUser,
  getlogData,
  PersonalInfo,
  AddressAdd,
} = require("../Controller/LoginController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.put("/updatePass", updatePass);
router.get("/verify", verifyToken, verifyUser);
router.get("/getuser", getlogData);
router.put("/updateinfo", verifyToken, PersonalInfo);
router.put("/updateAddress", verifyToken, AddressAdd);

module.exports = router;
