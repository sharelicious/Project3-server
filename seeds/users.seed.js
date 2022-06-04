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
    favoriteStores: [],
    friends: [],
  },
  {
    username: "Bjork",
    password: "1234",
    email: "bjork@sharelicious.com",
    tagLine: "Broggggmas",
    comments: [],
    userImg: undefined,
    favoriteStores: [],
    friends: [],
  },
  {
    username: "Sammy",
    password: "1234",
    email: "sammy@sharelicious.com",
    tagLine: "7000 pavos",
    comments: [],
    userImg: undefined,
    favoriteStores: [],
    friends: [],
  },
  {
    username: "Aleix",
    password: "1234",
    email: "aleix@sharelicious.com",
    tagLine: "What a fuck!",
    comments: [],
    userImg: undefined,
    favoriteStores: [],
    friends: [],
  },
  {
    username: "Adrian",
    password: "1234",
    email: "adrian@sharelicious.com",
    tagLine: "Tengo seeeeed",
    comments: [],
    userImg: undefined,
    favoriteStores: [],
    friends: [],
  },
  {
    username: "Alberte",
    password: "1234",
    email: "alberte@sharelicious.com",
    tagLine: "Mi dosis de azuuucar",
    comments: [],
    userImg: undefined,
    favoriteStores: [],
    friends: [],
  },
  {
    username: "Klaus",
    password: "1234",
    email: "klaus@sharelicious.com",
    tagLine: "Muy buuueno amigo!",
    comments: [],
    userImg: undefined,
    favoriteStores: [],
    friends: [],
  },
  {
    username: "Corina",
    password: "1234",
    email: "corina@sharelicious.com",
    tagLine: "We aren't in the same page",
    comments: [],
    userImg: undefined,
    favoriteStores: [],
    friends: [],
  },
  {
    username: "Pablo",
    password: "1234",
    email: "pablo@sharelicious.com",
    tagLine: "Asaaaado!",
    comments: [],
    userImg: undefined,
    favoriteStores: [],
    friends: [],
    
  },
  {
    username: "Marco",
    password: "1234",
    email: "marco@sharelicious.com",
    tagLine: "Bravisssimo!",
    comments: [],
    userImg: undefined,
    favoriteStores: [],
    friends: [],
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
