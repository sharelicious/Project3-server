const { isAuthenticated } = require("../middlewares/jwt.middleware");
const mongoose = require("mongoose");
const router = require("express").Router();
const User = require("../models/User.model");

//Retrieve all friends
router.get("/friends", isAuthenticated, (req, res) => {
  User.findById(req.payload._id)
    .populate("friends")
    .then((user) => res.json(user.friends))
    .catch((error) =>
      res.status(500).json({ message: "Internal Server Error", error })
    );
});

//Retrieve all users
router.get("/search/users", (req, res) => {
  User.find()
    .populate("friends")
    .then((users) => {
      res.json(users);
    })
    .catch((error) => res.status(500).json(error));
});

//following friends
router.post("/follow/:friendId", isAuthenticated, (req, res) => {
  User.findById(req.payload._id)
    .then((loggedInUser) => {
      loggedInUser.friends.push(req.params.friendId);
      loggedInUser
        .save()
        .then((loggedInUser) => res.json(loggedInUser.friends));
    })
    .catch((error) => {
      console.log("UnablerequestProperty: 'payload' to find friends", error);
      res.redirect("/friends");
    });
});

//unfollowing friends
router.post("/unfollow/:friendId", isAuthenticated, (req, res) => {
  User.findById(req.payload._id)
    .then((loggedInUser) => {
      const friendIndex = loggedInUser.friends.indexOf(req.params.friendId);
      loggedInUser.friends.splice(friendIndex, 1);
      loggedInUser
        .save()
        .then((loggedInUser) => res.json(loggedInUser.friends));
    })
    .catch((error) => {
      console.log("Unable to find friends", error);
      res.redirect("/friends");
    });
});

//check if the users are following each other
router.get("/checkfollowing/:friendId", isAuthenticated, (req, res) => {
  User.findById(req.payload._id)
    .then((loggedInUser) => {
      const isFollowing = loggedInUser.friends.includes(req.params.friendId);
      res.json(isFollowing);
    })
    .catch((error) => {
      res.redirect("/friends");
      console.log("Unable to find friends", error);
    });
});

module.exports = router;
