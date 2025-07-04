const AddCategory = require("../Model/AddCategory");

const postCate = async (req, res) => {
  const { category, desc, status, subcategory, img } = req.body;

  try {
    const newCate = new AddCategory({
      img,
      category,
      desc,
      status,
      subcategory,
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

const putCate = async (req, res) => {
  const { category, desc, status, subcategory, img } = req.body;
  const id = req.params.id;

  try {
    const updatedCategory = await AddCategory.findByIdAndUpdate(
      id,
      { category, desc, status, subcategory, img },
      { new: true }
    );

    if (!updatedCategory) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Category updated successfully",
      category: updatedCategory,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteCate = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await AddCategory.findByIdAndDelete(id);

    if (!deletedCategory) {
      res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting category",
    });
  }
};

module.exports = { postCate, getCate, putCate, deleteCate };
