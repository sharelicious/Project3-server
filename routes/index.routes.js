const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
})

router.use("/auth", require('./auth.routes'))
router.use("/store", require('./stores.routes'))
router.use("/user", require('./user.routes'))
router.use("/upload", require('./upload.routes'))
<<<<<<< HEAD
=======
router.use("/", require('./profile.routes'))
>>>>>>> 4fabab9f72eb72c7b0ed143c18763322a8d67a67

module.exports = router