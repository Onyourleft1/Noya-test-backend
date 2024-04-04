const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    ethereum: {
      type: String,
      required: [true, "Please enter Address"],
    },
  },
  {
    timestamps: true,
  }
);

const Address = mongoose.model("Address", schema);

module.exports = Address;
