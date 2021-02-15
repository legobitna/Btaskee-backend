const Order = require("../model/Order");
const orderController = {};

orderController.register = async (req, res, next) => {
  try {
    let {
      user,
      address,
      houseType,
      houseNumber,
      date,
      serviceType,
      cooking,
      iron,
      tool,
      repeat,
      maid,
      pet,
    } = req.body;

    const order = await Order.create({
      user,
      address,
      houseType,
      houseNumber,
      date,
      serviceType,
      cooking,
      iron,
      tool,
      repeat,
      maid,
      pet,
    });
    return res.status(200).json({ status: "success", data: order });
  } catch (err) {
    return res.status(401).json({ status: "fail", message: err.message });
  }
};

orderController.get = async (req, res, next) => {
  try {
    const orders = await Order.find({}).sort({ date: 1 });
    if (orders) {
      return res.status(200).json({ status: "success", data: orders });
    } else {
      throw new Error("no order exist");
    }
  } catch (err) {
    return res.status(401).json({ status: "fail", message: err.message });
  }
};

module.exports = orderController;
