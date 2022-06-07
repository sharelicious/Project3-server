const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
})

router.use("/auth", require('./auth.routes'))
router.use("/store", require('./stores.routes'))
router.use("/", require('./user.routes'))
router.use("/upload", require('./upload.routes'))
router.use("/", require('./profile.routes'))


module.exports = router