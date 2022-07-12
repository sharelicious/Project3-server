const { isAuthenticated } = require("../middlewares/jwt.middleware");
const mongoose = require("mongoose");
const router = require("express").Router();
const User = require("../models/User.model");
const Store = require("../models/Store.model");

//actions on like button
router.post("/:storeId", isAuthenticated, (req, res) => {
  const id = req.params.storeId;
  User.findById(req.payload._id).then((user) => {
    if (!user.favoriteStores.includes(id)) {
      User.findByIdAndUpdate(req.payload._id, { $push: { favoriteStores: id } })
        .then((user) => {
          Store.findByIdAndUpdate(
            id,
            { $push: { storeLikes: req.payload._id } },
            { new: true }
          ).then((store) => {
            res.status(201).json(store.storeLikes);
          });
        })
        .catch((error) => {
          res.status(500).json(error);
        });
    }
  });
});

// See all likes of the user
router.get("/:storeId/like/:userId", (req, res) => {
  User.findById(req.payload._id)
    .populate("favoriteStores")
    .then((user) => {
      const reverseLikes = user.favoriteStores.reverse();
      res.status(200).json(reverseLikes);
    })
    .catch((error) => console.log(error));
});

//See all friend's favourites restaurants
router.get("/friendsStores", isAuthenticated, (req, res) => {
  User.findById(req.payload._id)
    .populate({
      path: "friends",
      populate: {
        path: "favoriteStores",
      },
    })
    .then((user) => {
      const friendsLikesArr = [];

      user.friends.forEach((friend) => {
        if (friend.favoriteStores.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * friend.favoriteStores.length
          );
          const newItem = {
            friend: friend,
            store: friend.favoriteStores[randomIndex],
          };

          friendsLikesArr.push(newItem);
        }
      });

      res.status(201).json(friendsLikesArr);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
