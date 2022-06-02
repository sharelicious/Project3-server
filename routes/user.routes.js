//"/follow-friends"
//"/friends"

const { isAuthenticated } = require("../middlewares/jwt.middleware");
const mongoose = require("mongoose");
const router = require("express").Router();
const User = require("../models/User.model");

//all friends
router.get("/user/friends", isAuthenticated, (req, res) => {
  const allFriends = User.findById(req.payload._id); //username.find()
  Promise.all([allFriends])
    .then(([friends]) => {
      res.json(friends);
    })
    .catch((err) => res.status(500).json(err));
});

//filtered friends
router.get("/search/user", isAuthenticated, (req, res) => {
  const allFriends = User.findById();
  Promise.all([allFriends])
   .populate("friends")
    .then(([friends]) => {
      res.json(friends);
    })
    .catch((err) => res.status(500).json(err));
});

//following friends
router.get("/user/follow/:friendId", (req, res) => {
  User.findById(req.payload._id)
  .then((loggedInUser)=>{
    loggedInUser.friends.push([req.params.friendId])
    loggedInUser.save() //db
    .then((loggedInUser)=> res.json(loggedInUser.friends))
  })
    .catch((err) => {
      console.log("Unable to find friends", err);
      res.redirect("/friends");
    });
});

module.exports = router;
