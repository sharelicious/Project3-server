const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
    minlength: 20,
  },
  productImg: {
    type: String,
    required: true,
  },
});

const Product = model("Product", productSchema);

module.exports = Product;
