const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
})


 router.use("/auth", require('./auth.routes'))

/* router.use("/store", require('./stores.routes'))

/* router.use("/coasters", require('./stores.routes'))

router.use("/store", require('./store.routes')) */



router.use("/upload", require('./upload.routes'))  */

module.exports = router