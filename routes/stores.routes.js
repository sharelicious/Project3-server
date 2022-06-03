const router = require("express").Router();
const Store = require("../models/Store.model");
const Product = require("../models/Product.model");
const Comment = require("../models/Comment.model");
const User = require("../models/User.model");
const mongoose = require("mongoose");
const { isAuthenticated } = require("../middlewares/jwt.middleware");

router.get("/cuisine/:type", isAuthenticated, (res, req) => {
Store.find({ cuisineType: req.params.type })
    .populate("products")
    .then((stores) => {
      res.status(201).json(stores)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
});

router.get("/friends-stores",isAuthenticated, (req, res) => {
  User.findById(req.payload._id) // req.payload._id is the user's id
    .populate({
      path : 'friends',
      populate : {
        path : 'favoriteStores'
      }
    })
    .then((user) => {
      res.status(201).json(user.friends)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
});

router.get("/cuisine-results", isAuthenticated, (req, res) => {
  Store.find()
    .populate("products")
    .populate("comments")
    .then((stores) => {
      res.status(201).json(stores)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})


router.get("/store-details/:storeId", isAuthenticated, (req, res) => {
  Store.findById(req.payload._id)
    .populate("products")
    .populate("comments")
    .then((store) => {
      res.status(201).json(store)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
  User.findById(req.payload._id) // req.payload._id is the user's id
    .populate({
      path : 'friends',
      populate : {
        path : 'favoriteStores'
      }
    })
    .then((user) => {
      res.status(201).json(user.friends)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
});


  
module.exports = router;

