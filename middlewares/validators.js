const { validationResult } = require("express-validator");
const validators = {};

validators.validate = (validationArray) => async (req, res, next) => {
  await Promise.all(validationArray.map((validation) => validation.run(req)));
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();

  const extractedErrors = [];
  errors
    .array()
    .map((error) => extractedErrors.push({ [error.param]: error.msg }));
  return res.status(422).json({ result: false, message: "Validation Error" });
};

module.exports = validators;
