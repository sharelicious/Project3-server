const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const { isAuthenticated } = require("../middlewares/jwt.middleware");

const router = express.Router();
const saltRounds = 10;

router.post("/signup", (req, res) => {
  const { email, password, username } = req.body;

  /*   if (password.length < 6 || password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
    res.status(400).json({ message: 'Password must contain at least 8 characters, 1 number and 1 uppercase' })
    return
  } */

  User.findOne({ email })
    .then((foundUser) => {
      if (foundUser) {
        res.status(400).json({ message: "User already exists" });
        return;
      }

      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);
      return User.create({ username, email, password: hashedPassword });
    })
    .then((createdUser) => {
      console.log("----", createdUser);
      const {
        _id,
        username,
        email,
        password,
        favoriteStores,
        friends,
        tagLine,
        comments,
        userImg,
      } = createdUser;
      const user = {
        username,
        email,
        password,
        favoriteStores,
        friends,
        tagLine,
        comments,
        userImg,
      };

      const payload = { _id, email, username };

      const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
        algorithm: "HS256",
        expiresIn: "6h",
      });

      res.status(201).json({ authToken });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "" || password === "") {
    res.status(400).json({ message: "Please provide email and password" });
    return;
  }

  User.findOne({ email })
    .select("+password")
    .then((foundUser) => {
      if (!foundUser) {
        res.status(401).json({ message: "User not found" });
        return;
      }

      const passwordCorrect = bcrypt.compareSync(password, foundUser.password);

      if (passwordCorrect) {
        const { _id, email, username } = foundUser;

        const payload = { _id, email, username };

        const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
          algorithm: "HS256",
          expiresIn: "6h",
        });

        res.status(200).json({ authToken: authToken });
      } else {
        res.status(401).json({ message: "Unable to authenticate the user" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
});

// no devuelve el token
router.get("/verify", isAuthenticated, (req, res) => {
  setTimeout(() => {
    res.status(200).json(req.payload);
  }, 3000);
});

module.exports = router;
