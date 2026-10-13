const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

//Get the collection of all Product
router.get("/", async (req, res) => {
  try {
    let filter = {};

    if (req.query.type) {
      filter.type = req.query.type;
    }

    if (req.query.featured) {
      filter.featured = req.query.featured === "true";
    }
    const Products = await Product.find(filter);

    res.status(200).json(Products);
  } catch (errr) {
    res.status(500).json({
      message: "Error fetching products",
      err: errr.message,
    });
  }
});

//Add a new product
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);

    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json({
      message: "Error adding the Product",
      error: err.message,
    });
  }
});

module.exports = router;
