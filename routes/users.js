var express = require("express");
var router = express.Router();
const validators = require("../middlewares/validators");
const { body } = require("express-validator");
const userController = require("../controller/UserController");

router.post(
  "/",
  validators.validate([
    body("name", "Invalid name").exists().notEmpty(),
    body("email", "Invalid email").exists().isEmail(),
    body("password", "Invalid password").exists().notEmpty(),
  ]),
  userController.register
);

module.exports = router;
