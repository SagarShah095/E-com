const express = require("express");
const {
  postCate,
  getCate,
  putCate,
  deleteCate,
} = require("../Controller/addCateController");
const verifyToken = require("../Middleware/Middleware");
const upload = require("../Middleware/Multer");

const router = express.Router();

router.post("/post-cate", upload.single("img"), postCate);
router.get("/get-cate", verifyToken, getCate);
router.put("/:id", putCate);
router.delete("/:id", deleteCate);

module.exports = router;
