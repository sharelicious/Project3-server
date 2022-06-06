const mongoose = require("mongoose");
const User = require("../models/User.model");
require("../db/index");

const users = [
  {
    _id: "6298834354d5be7c0ef07999",
    username: "test1",
    password: "$2a$10$Slvfehn8Xm5C.eYiwmA53O7J581CgSy5TONl4BbDKJCSjLm.2i5ei",
    email: "test1@sharelicious.com",
    tagLine: "Klaussieeee",
    userImg: undefined,
    favoriteStores: ["6298834354d5be7c0ef07555"],
    friends: ["6298834354d5be7c0ef07000", "6298834354d5be7c0ef07001"],
  },
  {
    _id: "6298834354d5be7c0ef07000",
    username: "test2",
    password: "$2a$10$Slvfehn8Xm5C.eYiwmA53O7J581CgSy5TONl4BbDKJCSjLm.2i5ei",
    email: "test2@sharelicious.com",
    tagLine: "Test2",
    userImg: undefined,
    favoriteStores: ["6298834354d5be7c0ef07556"],
    friends: [],
  },
  {
    _id: "6298834354d5be7c0ef07001",
    username: "test3",
    password: "$2a$10$Slvfehn8Xm5C.eYiwmA53O7J581CgSy5TONl4BbDKJCSjLm.2i5ei",
    email: "test3@sharelicious.com",
    tagLine: "Testt3",
    userImg: undefined,
    favoriteStores: ["6298834354d5be7c0ef07556"],
    friends: [],
  }
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
