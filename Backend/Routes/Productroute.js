const express = require("express");
const multer = require("multer");
const Product = require("../models/Product");
const cloudinary = require("../config/cloudinary");

const router = express.Router();

// keep uploaded files in memory (nothing is saved on the server's disk)
const upload = multer({ storage: multer.memoryStorage() });

// helper: send one image to Cloudinary and get its link back
function uploadToCloudinary(buffer) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: "ecommerce" }, (err, result) =>
        err ? reject(err) : resolve(result),
      )
      .end(buffer);
  });
}

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

//Add a new product (expects two image files: main and hover)
router.post(
  "/",
  upload.fields([
    { name: "main", maxCount: 1 },
    { name: "hover", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const mainFile = req.files?.main?.[0];
      const hoverFile = req.files?.hover?.[0];

      if (!mainFile || !hoverFile) {
        return res
          .status(400)
          .json({ message: "main and hover images are required" });
      }

      const mainResult = await uploadToCloudinary(mainFile.buffer);
      const hoverResult = await uploadToCloudinary(hoverFile.buffer);

      const newProduct = new Product({
        ...req.body,
        main: mainResult.secure_url,
        hover: hoverResult.secure_url,
      });

      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json({
        message: "Error adding the Product",
        error: err.message,
      });
    }
  },
);

module.exports = router;
