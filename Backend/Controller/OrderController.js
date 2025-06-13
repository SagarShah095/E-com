const Order = require("../Model/Order");

const addOrder = async (req, res) => {
  const { item, address, number, prdQuntity, price, payment } = req.body;

  try {
    const newAddOrder = new Order({
      item,
      address,
      number,
      prdQuntity,
      price,
      payment,
    });

    await newAddOrder.save();

    return res.status(201).json({
      success: true,
      message: "Order added successfully",
    });
  } catch (error) {
    console.error("Error Ordering Product:", error);
    return res.status(500).json({
      success: false,
      message: "Add Order server error",
      error: error.message,
    });
  }
};

const getOrderData = async (req, res) => {
  try {
    const getOrd = await Order.find();
    return res.status(200).json({
      success: true,
      getOrd,
    });
  } catch (error) {
    console.error("Error in getOrderData:", error);
    return res.status(500).json({
      success: false,
      message: "getOrderData server error",
      error: error.message,
    });
  }
};

const putOrderData = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = await Order.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true, runValidators: true } // <-- 'new' returns updated doc, 'runValidators' ensures validation
    );

    console.log("Request Body:", req.body);
    console.log("Updated Data:", updateData);

    if (!updateData) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: updateData,
    });
  } catch (error) {
    console.error("Error updating OrderData:", error);
    res.status(500).json({
      success: false,
      message: "Update OrderData server error",
    });
  }
};

const deleteOrderData = async (req, res) => {
  try {
    const { id } = req.params;
    await Order.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      message: "OrderData deleted Successfully"
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Delete OrderData server error",
    });
  }
};

module.exports = { addOrder, getOrderData, putOrderData, deleteOrderData };
