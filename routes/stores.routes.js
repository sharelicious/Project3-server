const router = require("express").Router();
const Store = require("../models/Store.model");
const Product = require("../models/Product.model");
const Comment = require("../models/Comments.model");
const User = require("../models/User.model");
const mongoose = require("mongoose");
const { isAuthenticated } = require("../middlewares/jwt.middleware");

router.get("/getAllCuisines", isAuthenticated, (req, res, next) => {
  const allCuisines = Product.find();

  Promise.all([allCuisines])
    .then(([cuisines]) => {
      res.json(filteredStores(cuisines));
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/getAllFavoriteStores", isAuthenticated, (req, res, next) => {
  const allStores = Store.find();
  const allFavoritesStores = User.find();
  

  Promise.all([allStores, allFavoritesStores])
    .then(([stores, favoritesStores]) => {
      res.json(filteredStores(stores, favoritesStores));
    })
    .catch((err) => res.status(500).json(err));
});


router.get("/filter/:cuisine", isAuthenticated, (req, res) => {
  const { cuisineType } = req.params;

  Product.find({ cuisineType })
    .then((cuisineGroups) => {
      res.status(201).json(cuisineGroups);
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/filter/:store", isAuthenticated, (req, res, next) => {
  const { favoriteStores } = req.params;

  Product.find({ cuisineType })
    .then((cuisineGroups) => {
      res.status(201).json(cuisineGroups);
    })
    .catch((err) => res.status(500).json(err));
});

router.get('/getStoreById/:id', (req, res, next) => {

  const { id } = req.params

  Store
      .find({ storeName: id })
      .then(stores => res.json(stores))
      .catch(err => res.status(500).json(err))
})












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
