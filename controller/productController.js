const Product = require("../models/productModels");
const catchAsyncError = require("../utils/catchAsyncError");

//create a product
exports.createProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    status: true,
    message: "data created successfully",
    data: product,
  });
});