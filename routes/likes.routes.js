const { isAuthenticated } = require("../middlewares/jwt.middleware");
const mongoose = require("mongoose");
const router = require("express").Router();
const User = require("../models/User.model");
const Store = require("../models/Store.model");

//actions on like button
router
.post("/:storeId/like", (req, res) => {
    const { id } = req.params;
    Store.findByIdAndUpdate(id, {$push: { storeLikes: req.payload._id }})
    .then((updatedStore) => {
        User.findByIdAndUpdate(req.payload._id, {$push: { favoriteStores: updatedStore._id}})})
        .then((__) => {
            res.status(201).json('liked correctly!')
        })
    .catch((err) => {
        res.status(500).json(err);
    })
})

// See all likes of the user 
router
.get ("/:storeId/like/:userId", (req, res) => {
    User.findById(req.payload._id)
    .populate("favoriteStores")
    .then((user) => {
        const reverseLikes = user.favoriteStores.reverse();
        res.status(200).json(reverseLikes)
    })
    .catch((err) => console.log(err))
})

