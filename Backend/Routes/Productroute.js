const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

//Get all the Product
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (errr) {
    res.status(500).json({
      message: "Error fetching products",
      error: errr.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);

    const savedProduct = await product.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({
      message: "Error adding product",
      error: error.message,
    });
  }
});

module.exports = router;
