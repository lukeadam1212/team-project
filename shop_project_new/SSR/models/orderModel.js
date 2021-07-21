const mongoose = require(`mongoose`);

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    measurements: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      require: true,
    },
    material: {
      type: String,
      require: true,
    },
  },
  { timeStamps: true }
);

const Order = mongoose.model(`Order`, orderSchema);
module.exports = Order;
