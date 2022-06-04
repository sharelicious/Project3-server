const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UberEats = "Uber Eats";
const UberEatsLink = UberEats.link("https://www.ubereats.com/es-en/");
const DoorDash = "Door Dash";
const DoorDashLink = DoorDash.link("https://www.doordash.com/");
const Postmates = "Postmates";
const PostmatesLink = Postmates.link("https://www.postmates.com/");

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
      ref: "Product",
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
      ref: "Comment",
    },
  ],
  storeLikes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  deliveryOptions: [
    {
      type: String,
      enum: [UberEatsLink, DoorDashLink, PostmatesLink],
    },
  ],
});

const Store = model("Store", storeSchema);

module.exports = Store;
