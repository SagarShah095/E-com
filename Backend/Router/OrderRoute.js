const express = require("express");
const {
  addOrder,
  getOrderData,
  putOrderData,
  deleteOrderData,
} = require("../Controller/OrderController");
const router = express.Router();

router.post("/addOrder", addOrder);
router.get("/getOrder", getOrderData);
router.put("/:id", putOrderData);
router.delete("/:id", deleteOrderData);


module.exports = router;
