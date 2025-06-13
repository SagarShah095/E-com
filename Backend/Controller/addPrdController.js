const AddProduct = require("../Model/addProduct");

const addPrd = async (req, res) => {
  const {
    img,
    prdName,
    prdCategory,
    Price,
    discount,
    stock,
    overview,
    material,
    color,
  } = req.body;

  try {
    const newAddPrd = new AddProduct({
      img: req.file ? req.file.filename : "",
      prdName,
      prdCategory,
      Price,
      discount,
      stock,
      overview,
      material,
      color,
    });

    await newAddPrd.save();

    return res.status(201).json({
      success: true,
      message: "Product added successfully",
    });
  } catch (error) {
    console.error("Error adding Product:", error);
    return res.status(500).json({
      success: false,
      message: "Add Product server error",
      error: error.message,
    });
  }
};

const getPrd = async (req, res) => {
  try {
    const getPrd = await AddProduct.find();
    return res.status(200).json({
      success: true,
      getPrd,
    });
  } catch (error) {
    console.error("Error in getProductData:", error);
    return res.status(500).json({
      success: false,
      message: "getProductData server error",
      error: error.message,
    });
  }
};

const getSinglePrd = async (req, res) => {
  const { id } = req.params;

  try {
    const getPrd = await AddProduct.findOne({ id });
    return res.status(200).json({
      success: true,
      getPrd,
    });
  } catch (error) {
    console.error("Error in getOneProductData:", error);
    return res.status(500).json({
      success: false,
      message: "getOneProductData server error",
      error: error.message,
    });
  }
};

const updateStock = async (req, res) => {
  const { stock, _id } = req.body;

  try {
    const updatedProduct = await AddProduct.findByIdAndUpdate(
      _id,
      { stock },
      { new: true }
    );

    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({
      success: true,
      message: "Stock updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating stock:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const deletePrd = async (req, res) => {
  const { _id } = req.body;
  try {
    await AddProduct.findByIdAndDelete(_id);
    res.status(201).json({
      success: true,
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product Delete Server Error",
    });
  }
};

const whitelist = async (req, res) => {
  const { whitelist } = req.body;
  try {
    const newWhiteList = new AddProduct({
      whitelist,
    });
    await newWhiteList.save();
    res.status(201).json({
      success: true,
      message: "Product Whitelisted",
    });
  } catch (error) {
    console.log(error)
    res.status(501).json({
      success: false,
      message: "Product Whitelist server error"
    })
  }
};

module.exports = { addPrd, getPrd, getSinglePrd, updateStock, deletePrd, whitelist };
