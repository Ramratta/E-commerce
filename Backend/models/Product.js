const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
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

    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },

    stock: {
      type: Number,
      default: 0,
    },

    rating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Products = mongoose.model("Product", productSchema);

module.exports = Products;
