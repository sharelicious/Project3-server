const mongoose = require("mongoose");
require("../db");
const Comment = require("../models/Comment.model");

const comments = [
  {
    _id: "6298834354d5be7c0ef07888",
    owner: "6298834354d5be7c0ef07999",
    message: "Ta rica la burga pa",
  },
  
];

Comment.deleteMany().then(() => {
  Comment.create(comments)
    .then((commentFromDb) => {
      console.log("Created", commentFromDb.length, "comments");
      mongoose.connection.close();
    })
    .catch((err) =>
      console.log(`An error occurred while creating comments: ${err}`)
    );
});
