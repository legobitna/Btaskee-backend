var express = require("express");
var router = express.Router();
const validators = require("../middlewares/validators");
const { body } = require("express-validator");
const orderController = require("../controller/OrderController");

router.get("/", orderController.get);
router.post(
  "/",
  validators.validate([
    body("address", "Invalid value").exists().notEmpty(),
    body("houseNumber", "Invalid value").exists().notEmpty(),
    body("houseType", "Invalid value").exists().notEmpty(),
    body("date", "Invalid value").exists().notEmpty(),
  ]),
  orderController.register
);

module.exports = router;
