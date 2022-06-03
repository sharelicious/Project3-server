const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
})

<<<<<<< HEAD

 router.use("/auth", require('./auth.routes'))
 router.use("/user", require('./user.routes'))
 router.use("/store", require('./stores.routes'))


 /* 
router.use("/upload", require('./upload.routes'))  
router.use("/store", require('./stores.routes'))
*/




=======
router.use("/auth", require('./auth.routes'))
router.use("/store", require('./stores.routes'))
router.use("/user", require('./user.routes'))
router.use("/upload", require('./upload.routes'))
>>>>>>> 53d801ac6172b979a366e3794519e68ab165486d

module.exports = router