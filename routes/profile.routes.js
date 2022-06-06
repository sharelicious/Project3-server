const router = require("./user.routes");
const User = require('../models/User.model')
const uploader = require('./../config/cloudinary.config')


// user profile
router.get("/profile/:id", (req, res) => {
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
  .post("/profile/:id/edit",(req, res) => {
    const { id } = req.params;
     User.findByIdAndUpdate(id,{
       username: req.body.username,
       tagLine: req.body.tagLine,
      email: req.body.email},/*  { userImg } */ { new: true }) 
     console.log(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      console.log(error);
    })
  })

  /* .post(uploader.single("userImg"), (req, res) => {
    const id = req.payload._id;
    const { username, email, tagLine } = req.body;
    let userImg = undefined;
    if (req.file) userImg = req.file.path;

    res.status(200).json
      .then((user) => {
        res.redirect(`/profile/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }); */
 

  /* .post(fileUploader.single("userImg"), (req, res) => {
    const id = req.session.currentUser._id;
    const { username, email, password, tagLine } = req.body;
    let userImg = undefined;

    if (req.file) userImg = req.file.path;
    User.findByIdAndUpdate(id, req.body, { userImg }, { new: true })
      .then((user) => {
        res.redirect(`/profile/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }); */

//user profile delete
router.get("/profile/:id/delete", (req, res) => {
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