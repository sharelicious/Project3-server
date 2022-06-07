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
    select: false
  },
  username: {
    type: String,
    required: [true, "username is mandatory"],
    unique: true,
  },
  favoriteStores: [
    {
      type: Schema.Types.ObjectId,
      ref: "Store",
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
      maxlength: 100,
    },
  ],
  userImg: {
    type: String,
    default:
      "https://i.ibb.co/hDK8Qvr/default-avatar-300x300-1.jpg",
  },
});
const User = model("User", userSchema);
module.exports = User;
