const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name"],
  },

  description: {
    type: String,
    required: [true, "Please enter the description"],
  },
  price: {
    type: Number,
    required: [true, "Please enter the price"],
    default: 0,
  },
  category: {
    type: String,
    required: [true, "Please enter the category"],
  },
  ratings: {
    type: Number,
    default: 0,
  }
});

module.exports = mongoose.model("Product", productSchema);
