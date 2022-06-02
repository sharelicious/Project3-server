const mongoose = require("mongoose");
const User = require("../models/User.model");
require("../db/index");

const users = [
  {
    username: "Luisa",
    password: "1234",
    email: "luisa@sharelicious.com",
    tagLine: "Klaussieeee",
    comments: [],
    userImg: undefined,
    
  },
  {
    username: "Bjork",
    password: "1234",
    email: "bjork@sharelicious.com",
    tagLine: "Broggggmas",
    comments: [],
    userImg: undefined
  },
];

User.deleteMany().then(() => {
  User.create(users)
    .then((usersFromDb) => {
      console.log("Created", usersFromDb.length, "users");
      mongoose.connection.close();
    })
    .catch((err) =>
      console.log(`An error occurred while creating users: ${err}`)
    );
});
