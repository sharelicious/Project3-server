const router = require("express").Router();

router.get("/", (req, res, next) => {
  console.log(req);
  res.json("All good in here");
})

router.use("/auth", require('./auth.routes'))
router.use("/store", require('./stores.routes'))
router.use("/user", require('./user.routes'))
router.use("/upload", require('./upload.routes'))
router.use("/profile", require('./profile.routes'))
router.use("/like", require('./likes.routes'))


module.exports = router