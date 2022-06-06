const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const { isAuthenticated } = require("../middlewares/jwt.middleware");
const uploadCloud = require("../config/cloudinary.config"); // for editing profile picture

// user profile
router.get("/profile/user/:id", isAuthenticated, (req, res) => {
  const { _id } = req.params;

  User.findById(_id)
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      console.log(error);
    });
});

//user profile edit
router.get("/profile-edit/user/:id", isAuthenticated, (req, res) => {
    const { id } = req.params;
    User.findById(id)
      .then((user) => {
        res.json(user);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .put((req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;
    User.findByIdAndUpdate(id, 
      {
      username,
      email,
      password,
      tagline,
    })
      .then((user) => {
        res.json(user);
      })
      .catch((error) => {
        console.log(error);
      });
  });

module.exports = router;
