 const { isAuthenticated } = require("../middlewares/jwt.middleware");
const mongoose = require("mongoose");
const router = require("express").Router();
const User = require("../models/User.model");

//Retrieve all friends
router.get("/friends", isAuthenticated, (req, res) => {
  User.findById(req.payload._id)
    .populate("friends")
    .then(user => res.json(user.friends))
    .catch(err => res.status(500).json(err));
});

//Retrieve all users
router.get("/search/users", (req, res) => {
  User.find() 
    .populate("friends")
    .then((users) => {
      console.log("These are the users", users)
      res.json(users);
    })
    .catch((err) => res.status(500).json(err));
});

//following friends
router.post("/follow/:friendId", isAuthenticated, (req, res) => {
  User.findById(req.payload._id)
    .then((loggedInUser) => {
      loggedInUser.friends.push(req.params.friendId);
      loggedInUser
        .save() //db
        .then((loggedInUser) => res.json(loggedInUser.friends));
    })
    .catch((err) => {
      console.log("UnablerequestProperty: 'payload' to find friends", err);
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
        .save() //db
        .then((loggedInUser) => res.json(loggedInUser.friends));
    })
    .catch((err) => {
      console.log("Unable to find friends", err);
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
    .catch((err) => {
      console.log("Unable to find friends", err);
      res.redirect("/friends");
    });
});

module.exports = router;