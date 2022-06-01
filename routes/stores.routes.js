const router = require("express").Router();
const Store = require("../models/Store.model");
const Product = require("../models/Product.model");
const Comment = require("../models/Comment.model");
const User = require("../models/User.model");
const mongoose = require("mongoose");
const { isAuthenticated } = require("../middlewares/jwt.middleware");

router.get("/getAll", (req, res, next) => {
  const allCuisines = Product.find();
  const allFavoritesStores = User.find();

  Promise.all([allCuisines, allFavoritesStores])
    .then(([cuisines, favoritesStores]) => {
      res.json(filteredStores(cuisines, favoritesStores));
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/filter/:cuisine", (req, res) => {
  const { cuisineType } = req.params;

  Product.find({ cuisineType })
    .then((cuisineGroups) => {
      res.status(201).json(cuisineGroups);
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/filter/:store", (req, res, next) => {
  const { favoriteStores } = req.params;

  Product.find({ cuisineType })
    .then((cuisineGroups) => {
      res.status(201).json(cuisineGroups);
    })
    .catch((err) => res.status(500).json(err));
});












module.exports = router;

/* router.get("/getOneCoaster/:coaster_id", (req, res) => {

  const { coaster_id } = req.params

  Coaster
    .findById(coaster_id)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})


router.post("/saveCoaster", isAuthenticated, (req, res) => {

  const { title, description, imageUrl, inversions, length } = req.body

  const owner = req.payload._id

  console.log('El payload del objeto request nos da en las rutas protegidas el ID logueado:', owner)

  Coaster
    .create({ title, description, imageUrl, inversions, length, owner })
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})
  */
