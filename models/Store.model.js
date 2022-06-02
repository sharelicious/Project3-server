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
    default: "https://easterntradelinks.com/front/images/default.png",
  },
  deliveryTime: {
    type: String,
    enum: ["15 min", "15-30 min", "30-45 min"],
  },
  priceRange: {
    type: String,
    enum: ["$", "$$", "$$$"],
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Products",
    },
  ],
  cuisineType: {
    type: String,
    required: true,
    enum: [
      "Pizza",
      "Sushi",
      "Thai",
      "Chinese",
      "Ramen",
      "Soup",
      "Italian",
      "Vegan",
      "Healthy",
      "Indian",
      "Burgers",
      "Breakfast",
      "Salad",
      "Mexican",
      "Vegetarian",
      "Sandwiches",
      "Mediterranean",
      "Korean",
    ],
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comments",
    },
  ],
});

const Store = model("Store", storeSchema);

module.exports = Store;
