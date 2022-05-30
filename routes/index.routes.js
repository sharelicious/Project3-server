const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
})

router.use("/coasters", require('./coaster.routes'))

router.use("/auth", require('./auth.routes'))

router.use("/upload", require('./upload.routes'))

module.exports = router