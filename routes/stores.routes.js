const router = require("express").Router();
const Store = require("../models/Store.model");
const Product = require("../models/Product.model");
const Comment = require("../models/Comment.model");
const User = require("../models/User.model");
const mongoose = require("mongoose");
const { isAuthenticated } = require("../middlewares/jwt.middleware");
const { cuisineTypes } = require("../shared/cuisine-types.constants");

// Retrieve all cuisine types for homepage
router.get("/cuisine-types", isAuthenticated, (req, res) => {
  res.status(201).json({ cuisineTypes: cuisineTypes });
});

// Retrieve all friends favorite stores for homepage
router.get("/friends-stores", isAuthenticated, (req, res) => {
  User.findById(req.payload._id)
    .populate({
      path: "friends",
      populate: {
        path: "favoriteStores",
      },
    })
    .then((user) => {
      let uniqueStores = [];
      user.friends.forEach((friend) => {
        friend.favoriteStores.forEach((store) => {
          if (!uniqueStores.includes(store)) {
            uniqueStores.push(store);
          }
        });
      });
      res.status(201).json(uniqueStores);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

// Retrieve all stores with cuisine filter
router.get("/by-cuisine-type/:cuisineType", isAuthenticated, (req, res) => {
  const { cuisineType } = req.params;
  Store.find({ cuisineType: cuisineType })
    .then((stores) => {
      res.status(201).json(stores);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

// Retrieve store by id
router
.route("/:storeId")
.get(isAuthenticated, (req, res) => {
  const { storeId } = req.params;

  Store.findById(storeId)
    .populate("comments")
    .populate({
      path: "comments",
      populate: {
        path: "owner",
      },
    })
    .populate("products")
    .populate("storeLikes")
    .populate("deliveryOptions")
    .then((stores) => {
      res.status(201).json(stores);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
})
.post((req, res) => {
  const { storeId } = req.params;
  const { message } = req.body;

  Comment.create({ 
    owner: req.payload._id, 
    message
  })
  .then((newComment) => {
    console.log(newComment)

    Store.findByIdAndUpdate(id, {
      $push: {comments: newComment._id},
    })
    .then((updatedStore) => {
      console.log("UPDATED STORE", updatedStore);
      res.status(201).json(updatedStore)
    })
    .catch((error) => {
      res.status(500).json(error);
    })
  })
  .catch((error) => {
    res.status(500).json(error);
})
});

module.exports = router;
