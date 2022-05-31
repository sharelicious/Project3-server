const { Schema, model } = require("mongoose");

const storeSchema = new Schema({
  storeName: {
    type: String,
    required: true,
  },
  storeAddress: {
    type: String,
    required: true,
    minlength: 10,
  },
  storePhone: {
    type: String,
    required: true,
  },
  storeImg: {
    type: String,
    required: true,
  },
  deliveryTime: {
    type: String,
    enum: ["15 min", "15-30 min", "30-45 min"],
  },
  priceRange: {
    type: String,
    enum: ["$", "$$", "$$$"],
  },
  isUnder30Min: {
    type: Boolean,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Products",
    },
  ],
});

const Store = model("Store", storeSchema);

module.exports = Store;
