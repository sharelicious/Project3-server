const router = require("./user.routes");
const User = require('../models/User.model')

// user profile
router.get("/:id", (req, res) => {
  const { id } = req.params;
  
  User.findById(id)
    .then((user) => {
      res.json(user)
    })
    .catch((error) => {
      console.log(error);
    });
});

//user profile edit
router
.route("/profile/:id/edit")
.get((req, res) => {

    User.findById(req.payload._id)
    .then((user) =>{
        res.json(user, {
          username: user.username, 
          email: user.email, 
          tagLine: user.tagLine,
          userImg: user.userImg
        })
    })
})
.post(uploader.single("userImg"),(req, res) => {	
  const { id, username, tagLine, email, userImg} = req.body;

	let imageUrl = undefined
	if(req.file) imageUrl = req.file.path

	User.findByIdAndUpdate(id, {
    username, tagLine, email , userImg})
	.then((user) => {
    res.json(user);
  })
  .catch((error) => {
    console.log(error);
  })
})

//user profile delete
router.get("/:id/delete", (req, res) => {
  const { id } = req.params;
  User.findByIdAndDelete(id)
    .then((user) => {
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;