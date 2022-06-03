const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  message: {
    type: String,
    required: true,
    maxlength: 280,
  },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
