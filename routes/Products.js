const express = require("express");
const { createProduct, fetchAllProducts, fetchProductById, updateProduct } = require("../controller/Products");

const router = express.Router();

router.post("/", createProduct)
      .get("/", fetchAllProducts)
      .get("/:id",fetchProductById)
      .patch("/:id",updateProduct)

exports.router = router;
