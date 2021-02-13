const User = require("../model/User");
const bcrypt = require("bcryptjs");
const userController = {};

userController.register = async (req, res, next) => {
  try {
    let { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user)
      return next(new AppError(409, "User already exists", "Register Error"));

    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    user = await User.create({
      name,
      email,
      password,
    });

    return res.status(200).json({ status: "success", data: user });
  } catch (err) {
    return res.status(401).json({ status: "fail", message: err.message });
  }
};

module.exports = userController;
