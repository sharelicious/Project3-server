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
  favoriteStores: [
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
      maxlength: 280,
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comments",
    },
  ],
  userImg: {
    type: String,
    default:
      "https://simulacionymedicina.es/wp-content/uploads/2015/11/default-avatar-300x300-1.jpg",
  },
});

module.exports = model("User", userSchema);
