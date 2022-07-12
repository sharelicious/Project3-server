const mongoose = require("mongoose");
require("../db");
const Comment = require("../models/Comment.model");

const comments = [
  {
    _id: "6298834354d5be7c0ef07888",
    owner: "6298834354d5be7c0ef07999",
    message: "These burguers are the best I've eaten in years",
  },
];

Comment.deleteMany().then(() => {
  Comment.create(comments)
    .then((commentFromDb) => {
      console.log("Created", commentFromDb.length, "comments");
      mongoose.connection.close();
    })
    .catch((error) =>
      console.log(`An error occurred while creating comments: ${error}`)
    );
});
