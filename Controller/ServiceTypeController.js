const ServiceType = require("../model/ServiceType");
const serviceTypeController = {};

serviceTypeController.register = async (req, res, next) => {
  try {
    let { duration, size, numberOfRoom } = req.body;

    const serviceType = await ServiceType.create({
      duration,
      size,
      numberOfRoom,
    });

    return res.status(200).json({ status: "success", data: serviceType });
  } catch (err) {
    return res.status(401).json({ status: "fail", message: err.message });
  }
};

serviceTypeController.get = async (req, res, next) => {
  try {
    const serviceTypes = await ServiceType.find();
    if (serviceTypes) {
      return res.status(200).json({ status: "success", data: serviceTypes });
    } else {
      throw new Error("no service exist");
    }
  } catch (err) {
    return res.status(401).json({ status: "fail", message: err.message });
  }
};

module.exports = serviceTypeController;
