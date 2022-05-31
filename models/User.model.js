const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "email is mandatory"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is mandatory"],
  },
  username: {
    type: String,
    required: [true, "username is mandatory"],
    unique: true,
  },
  favoritesStores: [
    {
      type: Schema.Types.ObjectId,
      ref: "Stores",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  tagLine: [
    {
      type: String,
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comments",
    },
  ],
});

module.exports = model("User", userSchema);
