const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    mrp: {
      type: Number,
      required: true,
    },

    discount: {
      type: Number,
      default: 0,
    },
    main: {
      type: String,
      required: true,
    },
    hover: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },

    stock: {
      type: Number,
      default: 0,
    },

    rating: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      required: true,
      enum: [
        "newProducts",
        "Fashion",
        "Electronics",
        "Bags",
        "Footwear",
        "Groceries",
        "Beauty",
        "Welleness",
        "Jewellery",
      ],
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;
