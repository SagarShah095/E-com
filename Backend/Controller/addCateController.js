const AddCategory = require("../Model/AddCategory");

const postCate = async (req, res) => {
  const { category, desc, status } = req.body;

  try {
    const newCate = new AddCategory({
      img: req.file ? req.file.filename : "",
      category,
      desc,
      status,
    });

    await newCate.save();

    return res.status(201).json({
      success: true,
      message: "Category added successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Category add error: ${error.message}`,
    });
  }
};

const getCate = async (req, res) => {
  try {
    const category = await AddCategory.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      category,
      message: "Category retrieved successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { postCate, getCate };
