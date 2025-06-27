const express = require("express");
const { postCate, getCate } = require("../Controller/addCateController");
const verifyToken = require("../Middleware/Middleware");
const upload = require("../Middleware/Multer");

const router = express.Router();

router.post("/post-cate", upload.single("img"), postCate);
router.get("/get-cate", getCate);

module.exports = router;
