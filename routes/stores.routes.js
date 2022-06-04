const router = require("express").Router();
const Store = require("../models/Store.model");
const Product = require("../models/Product.model");
const Comment = require("../models/Comment.model");
const User = require("../models/User.model");
const mongoose = require("mongoose");
const { isAuthenticated } = require("../middlewares/jwt.middleware");

// Retrieve all cuisine types
router.get("/cuisine/:type", isAuthenticated, (res, req) => {
  const { type } = req.params;
  Store.find({ cuisineType: type })
    .populate("products")
    .then((stores) => {
      res.status(201).json(stores);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Retrieve all stores with cuisine filter
router.get("/cuisine-results", isAuthenticated, (req, res) => {
  Store.find()
    .populate("products")
    .populate("comments")
    .then((stores) => {
      res.status(201).json(stores);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  User.findById(req.payload._id) // req.payload._id is the user's id
    .populate({
      path: "friends",
      populate: {
        path: "favoriteStores",
      },
    })
    .then((user) => {
      res.status(201).json(user.friends);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Retrieve all friends favorite stores
router.get("/friends-stores", isAuthenticated, (req, res) => {
  User.findById(req.payload._id) // req.payload._id is the user's id
    .populate({
      path: "friends",
      populate: {
        path: "favoriteStores",
      },
    })
    .then((user) => {
      res.status(201).json(user.friends);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Retrieve store selected by user
router.get("/store-details/:storeId", isAuthenticated, (req, res) => {
  Store.findById(req.payload._id)
    .populate("products")
    .populate("comments")
    .populate("deliveryOptions")
    .then((store) => {
      res.status(201).json(store);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
