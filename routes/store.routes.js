const router = require("express").Router()

const { isAuthenticated } = require("../middlewares/jwt.middleware")
const Store = require('./../models/Store.model')

router.get("/getAllStores", (req, res) => {

  Store
    .find()
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})

router.get("/getOneStore/:store_id", (req, res) => {

  const { store_id } = req.params

  const marco = 10;

  Store
    .findById(store_id)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})


/* router.post("/saveStore", isAuthenticated, (req, res) => {

  const { storeName, address, storePhone, deliveryTime, priceRange } = req.body

  const owner = req.payload._id

  console.log('El payload del objeto request nos da en las rutas protegidas el ID logueado:', owner)

  Store
    .create({ title, description, imageUrl, inversions, length, owner })
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
}) */




module.exports = router