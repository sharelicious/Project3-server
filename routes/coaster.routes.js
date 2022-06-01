const router = require("express").Router()

const { isAuthenticated } = require("../middlewares/jwt.middleware")
const Coaster = require('./../models/Coaster.model')

router.get("/getAllCoasters", (req, res) => {

  Coaster
    .find()
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})

router.get("/getOneCoaster/:coaster_id", (req, res) => {

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




module.exports = router