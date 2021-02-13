const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = Schema(
  {
    address: { type: String, required: true },
    houseNumber: { type: String, required: true },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    houseType: { type: String, required: true },
    date: { type: Date, required: true },
    serviceType: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "ServiceType",
    },
    cooking: { type: Boolean, default: false },
    iron: { type: Boolean, default: false },
    tool: { type: Boolean, default: false },
    repeat: { type: Boolean, default: false },
    maid: { type: Boolean, default: false },
    pet: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false, select: false },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
