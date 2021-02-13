var express = require("express");
var router = express.Router();
const validators = require("../middlewares/validators");
const { body } = require("express-validator");
const serviceTypeController = require("../controller/ServiceTypeController");

router.get("/", serviceTypeController.get);
router.post(
  "/",
  validators.validate([
    body("duration", "Invalid value").exists().notEmpty(),
    body("size", "Invalid value").exists().notEmpty(),
  ]),
  serviceTypeController.register
);

module.exports = router;
