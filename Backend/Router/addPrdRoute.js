const express = require("express");
const {
  addPrd,
  getPrd,
  getSinglePrd,
  updateStock,
  deletePrd,
  whitelist,
} = require("../Controller/addPrdController");

const router = express.Router();

router.post("/addPoduct", addPrd);
router.get("/getPoduct", getPrd);
router.get("/:id", getSinglePrd);
router.put("/updStock", updateStock);
router.delete("/dltPrd", deletePrd);
router.post("/whitelist", whitelist);

module.exports = router;
