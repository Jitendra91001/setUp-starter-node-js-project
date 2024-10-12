const express = require("express");
const {
  createProduct,
} = require("../controller/productController");

const router = express.Router();
router
  .route("/products/create")
  .post(createProduct);
module.exports = router;
