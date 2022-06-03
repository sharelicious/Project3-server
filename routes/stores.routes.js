const router = require("express").Router();
const Store = require("../models/Store.model");
const Product = require("../models/Product.model");
/* const Comment = require("../models/Comments.model"); */
const User = require("../models/User.model");
const mongoose = require("mongoose");
const { isAuthenticated } = require("../middlewares/jwt.middleware");

router.get("/cuisine/:type", isAuthenticated, (res, req) => {
Store.find({ cuisineType: req.params.type })
    .populate("products")
    .then((stores) => {
      res.json(stores)
    })
    .catch((err) => {
      res.json(err)
    })
});

router.get("/friends-stores", isAuthenticated, (req, res) => {
  User.find({ friends: req.user._id })
    .populate("favoriteStores")
    .then((stores) => {
      res.json(stores)
    })
    .catch((err) => {
      res.json(err)
    })
});


router.get("/getAllCuisines", isAuthenticated, (req, res, next) => {
  const allCuisines = Product.find();

  Promise.all([allCuisines])
    .then(([cuisines]) => {
      res.json(filteredStores(cuisines));
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/getAllFavoriteStores", isAuthenticated, (req, res, next) => {
  const allFavoritesStores = User.find();
  

  Promise.all([allFavoritesStores])
    .then(([favoritesStores]) => {
      res.json(filteredStores(favoritesStores));
    })
    .catch((err) => res.status(500).json(err));
});


router.get("/filter/:cuisines", isAuthenticated, (req, res) => {
  const { cuisineType } = req.params;

  Store.find({ cuisineType })
    .then((cuisineGroups) => {
      res.status(201).json(cuisineGroups);
    })
    .catch((err) => res.status(500).json(err));
});

router.get('/filter/:stores', (req, res, next) => {

  const { favoritesStores } = req.params

  User
      .find({ favoritesStores })
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
