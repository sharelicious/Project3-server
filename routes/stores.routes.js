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
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Retrieve all stores with cuisine filter
router.get("/by-cuisine-type/:cuisineType", isAuthenticated, (req, res) => {
  const { cuisineType } = req.params;
  Store.find({ cuisineType: cuisineType })
    .then((stores) => {
      res.status(201).json(stores);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Retrieve store by id
router.get("/:storeId", isAuthenticated, (req, res) => {
  const { storeId } = req.params;
  
  Store.findById(storeId)
    .populate("comments")
    .populate("products")
    .populate("storeLikes")
    .populate("deliveryOptions")
    .then((stores) => {
      res.status(201).json(stores);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
