const router = require("./user.routes");

// user profile
router.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  let isOwner = false;
  if (id === req.session.currentUser._id) isOwner = true;
  User.findById(id)
    .populate("My favourites")
    .then((user) => {
      const reversedCreated = user.favourites.reverse();
      res.render("user-profile/user-profile", {
        user,
        isOwner,
        reversedCreated,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

//user profile edit

router
  .route("/profile/:id/edit")
  .get((req, res) => {
    const { id } = req.params;
    User.findById(id).then((user) => {
      res.json(user);
    });
  })
  .catch((error) => {
    console.log(error);
  })

  .post(fileUploader.single("userImg"), (req, res) => {
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
  });

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
