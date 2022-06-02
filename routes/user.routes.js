//"/follow-friends"
//"/friends"

const router = require ("express").Router();
const User = require ("../models/User.model");


//filtered friends
router.get("/filter/:friend", (req, res) => {
    const { friend } = req.params;
  
    Product.find({ friend })
      .then((friendsGroups) => {
        res.status(201).json(friendsGroups);
      })
      .catch((err) => res.status(500).json(err));
  });
  