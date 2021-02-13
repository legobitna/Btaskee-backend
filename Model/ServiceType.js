const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceTypeSchema = Schema(
  {
    duration: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    numberOfRoom: {
      type: Number,
      required: false,
    },
  },
  { timeStamp: true }
);

const ServiceType = mongoose.model("ServiceType", serviceTypeSchema);
module.exports = ServiceType;
