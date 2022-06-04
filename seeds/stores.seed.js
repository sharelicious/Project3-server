const mongoose = require("mongoose");
require("../db");
const Store = require("../models/Store.model");

const UberEats = 'Uber Eats';
const UberEatsLink = UberEats.link("https://www.ubereats.com/es-en/") 
const DoorDash = 'Door Dash';
const DoorDashLink = DoorDash.link("https://www.doordash.com/")
const Postmates = 'Postmates';
const PostmatesLink= Postmates.link("https://www.postmates.com/")

const stores = [
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/910f2db2-c57d-4098-b73d-93656199fa4e.jpg",
    storeName: "Shake Shack",
    storeAddress: ("20 3rd Avenue").link("https://goo.gl/maps/k8wRyxfiS2RFnFK66"),
    storePhone: "+16468132190",
    deliveryTime: "15-30 min",
    priceRange: "$",
    cuisineType: "Burgers",
    products: ["6298834354d5be7c0ef07956", "6298834b54d5be7c0ef07957", "6298835054d5be7c0ef07958", "6298835354d5be7c0ef07959", "6298835754d5be7c0ef0795a"],
    deliveryOptions: [DoorDashLink]
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/5fac858d-6717-4790-93b8-69b4d645ac9c.jpeg",
    storeName: "Bronson's Burgers",
    storeAddress: ("250 Mulberry Street").link("https://goo.gl/maps/gZzrA4gFzvaKkMMZ6"),
    storePhone: "+12128886280",
    deliveryTime: "15-30 min",
    priceRange: "$$",
    cuisineType: "Burgers",
    products: ["6298857a54d5be7c0ef0795c", "6298857d54d5be7c0ef0795d", "6298858154d5be7c0ef0795e", "6298858454d5be7c0ef0795f", "6298858854d5be7c0ef07960" ],
    deliveryOptions: [DoorDashLink]
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/99c43464-8946-494b-a67e-296cf7e6c624.jpg",
    storeName: "Holy Cow Burgers",
    storeAddress: ("34 Canal Street").link("https://goo.gl/maps/AFjQ4JbNxxaTzbM1A"),
    storePhone: "+12127749446",
    deliveryTime: "15-30 min",
    priceRange: "$",
    cuisineType: "Burgers",
    products: ["6298895e54d5be7c0ef07961", "6298896154d5be7c0ef07962", "6298896354d5be7c0ef07963", "6298896754d5be7c0ef07964", "6298896d54d5be7c0ef07966"],
    deliveryOptions: [PostmatesLink, DoorDashLink]
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/8745.jpg",
    storeName: "Bareburger",
    storeAddress: ("173 Orchard Street").link("https://goo.gl/maps/cc8KcQuLYXrUCN5y7"),
    storePhone: "+12125108610",
    deliveryTime: "15-30 min",
    priceRange: "$",
    cuisineType: "Burgers",
    products: ["62988b7d54d5be7c0ef07967", "62988b8054d5be7c0ef07968", "62988b8354d5be7c0ef07969", "62988b8754d5be7c0ef0796a", "62988b8a54d5be7c0ef0796b"],
    deliveryOptions: [UberEatsLink, DoorDashLink]
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/270a66a4-21fc-480c-bfc2-d33a4fb02839.jpg",
    storeName: "Black Burger",
    storeAddress: ("386 Canal Street").link("https://g.page/blacburgernyc?share"),
    storePhone: "+12124317651",
    deliveryTime: "15 min",
    priceRange: "$",
    cuisineType: "Burgers",
    products: ["62988d0b54d5be7c0ef0796c", "62988d0e54d5be7c0ef0796d", "62988d1154d5be7c0ef0796e", "62988d1454d5be7c0ef0796f", "62988d1754d5be7c0ef07970"],
    deliveryOptions: [UberEatsLink]
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/19846.jpg",
    storeName: "Joe's Pizza",
    storeAddress: ("150 East 14th Street").link("https://goo.gl/maps/KcFaD1CLUeqT7fHe6"),
    storePhone: "+12123889474",
    deliveryTime: "30-45 min",
    priceRange: "$$",
    cuisineType: "Pizza",
    products: ["62988eb254d5be7c0ef07971", "62988eb554d5be7c0ef07972", "62988eb954d5be7c0ef07973", "62988ebd54d5be7c0ef07974", "62988ec254d5be7c0ef07976"],
    deliveryOptions: [UberEatsLink]
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/2fce7a5d-1389-46c7-a975-6637515893cb.jpeg",
    storeName: "Artichoke Basille's Pizza",
    storeAddress: ("321 East 14th Street").link("https://g.page/artichokepizza14?share"),
    storePhone: "+12124317651",
    deliveryTime: "15-30 min",
    priceRange: "$$",
    cuisineType: "Pizza",
    products: ["629890bd54d5be7c0ef07978", "629890bf54d5be7c0ef07979", "629890c454d5be7c0ef0797a", "629890c954d5be7c0ef0797b", "629890cc54d5be7c0ef0797c"],
    deliveryOptions: [PostmatesLink]

  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/5fb0ea43-7c54-4257-94bc-6c12fb91e0cf.jpg",
    storeName: "Village Square Pizza",
    storeAddress: ("147 Avenue A").link("https://g.page/villagesquarepizza?share"),
    storePhone: "+19176757709",
    deliveryTime: "15 min",
    priceRange: "$",
    cuisineType: "Pizza",
    products: ["6298925754d5be7c0ef0797d", "6298925954d5be7c0ef0797e", "6298925c54d5be7c0ef0797f", "6298925f54d5be7c0ef07980", "6298926154d5be7c0ef07981"],
    deliveryOptions: [PostmatesLink, DoorDashLink, UberEatsLink]
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/30655.jpg",
    storeName: "Bleecker Street Pizza",
    storeAddress: ("69 7th Avenue South").link("https://g.page/BleeckerStreetPizza?share"),
    storePhone: "+19175432014",
    deliveryTime: "15-30 min",
    priceRange: "$",
    cuisineType: "Pizza",
    products: ["629898dc54d5be7c0ef07982", "629898df54d5be7c0ef07983", "629898e354d5be7c0ef07985", "629898e654d5be7c0ef07986", "629898e954d5be7c0ef07987"],
    deliveryOptions: [UberEatsLink, PostmatesLink]
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/1b91df9e-ad5b-42d5-aff5-4aa8187c62eb.jpg",
    storeName: "99 Cent Fresh Pizza",
    storeAddress: ("383 Canal Street").link("https://goo.gl/maps/zU9wuFVw7wC81pN4A"),
    storePhone: "+12129661110",
    deliveryTime: "15-30 min",
    priceRange: "$$",
    cuisineType: "Pizza",
    products: ["62989e9254d5be7c0ef07988", "62989e9554d5be7c0ef07989", "62989e9854d5be7c0ef0798a", "62989e9c54d5be7c0ef0798b", "62989ede54d5be7c0ef0798d"],
    deliveryOptions: [PostmatesLink]
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/361508f6-8125-49ef-b927-236d97f5cf1d.jpeg",
    storeName: "New Mizu Sushi",
    storeAddress: ("350 East 9th Street").link("https://goo.gl/maps/QMrHQ3CtcUu2ZSKP9"),
    storePhone: "+16469985453",
    deliveryTime: "15-30 min",
    priceRange: "$$",
    cuisineType: "Sushi",
    products: ["62989ee154d5be7c0ef0798e", "62989ee454d5be7c0ef0798f", "62989ee954d5be7c0ef07990", "62989eec54d5be7c0ef07991", "62989f1054d5be7c0ef07992"],
    deliveryOptions: [PostmatesLink, DoorDashLink]
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/4cde790a-9a6e-484b-90f8-c8ee1dce03e9.jpg",
    storeName: "DOMODOMO New York",
    storeAddress: ("140 West Houston Street").link("https://www.google.com/maps/place/DOMODOMO+New+York/@40.7280131,-74.0038065,17z/data=!4m5!3m4!1s0x89c2598df63aab29:0xb9d2ca4867a64bcd!8m2!3d40.7280131!4d-74.0016178"),
    storePhone: "+16467070301",
    deliveryTime: "15-30 min",
    priceRange: "$$$",
    cuisineType: "Sushi",
    products: ["6298a1f454d5be7c0ef07993", "6298a1f754d5be7c0ef07994", "6298a1fb54d5be7c0ef07995", "6298a1fd54d5be7c0ef07996", "6298a20054d5be7c0ef07997"],
    deliveryOptions: [UberEatsLink, DoorDashLink]
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/2192ef65-0a83-4bd3-8fd3-473aa01be67d.546",
    storeName: "Sushi Hatsune",
    storeAddress: ("50 Eldridge Street").link("https://goo.gl/maps/sUEG7rYF5KP7Y5Lh6"),
    storePhone: "+12123010723",
    deliveryTime: "15-30 min",
    priceRange: "$$",
    cuisineType: "Sushi",
    products: ["6298a8a954d5be7c0ef07998", "6298a8ad54d5be7c0ef07999", "6298a8af54d5be7c0ef0799a", "6298a8b354d5be7c0ef0799b", "6298a8b654d5be7c0ef0799c"],
    deliveryOptions: [UberEatsLink, DoorDashLink]
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/50ea62ab-be7b-495c-a80c-7a3b621aca6b.jpg",
    storeName: "Nara Sushi",
    storeAddress: ("76 Pearl Street").link("https://goo.gl/maps/3QeXjBfFL3huFKA99"),
    storePhone: "+16467200202",
    deliveryTime: "30-45 min",
    priceRange: "$$",
    cuisineType: "Sushi",
    products: ["6298b5b754d5be7c0ef0799d", "6298b5b954d5be7c0ef0799e", "6298b5be54d5be7c0ef0799f", "6298b5c054d5be7c0ef079a0", "6298b5c354d5be7c0ef079a1"],
    deliveryOptions: [UberEatsLink]
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/6c1f2f89-4520-4892-9f11-a52e9ac68af7.png",
    storeName: "Asuka Sushi",
    storeAddress: ("300 West 23rd Street").link("https://goo.gl/maps/7VPRxciFCXFJby9o7"),
    storePhone: "+12127270888",
    deliveryTime: "30-45 min",
    priceRange: "$$",
    cuisineType: "Sushi",
    products: ["6298b5e654d5be7c0ef079a2", "6298b5ea54d5be7c0ef079a3", "6298b5ee54d5be7c0ef079a4", "6298b5f154d5be7c0ef079a5", "6298b5f554d5be7c0ef079a6"],
    deliveryOptions: [PostmatesLink, DoorDashLink, UberEatsLink]

  },

];

Store.deleteMany().then(() => {
  Store.create(stores)
    .then((storeFromDb) => {
      console.log("Created", storeFromDb.length, "stores");
      mongoose.connection.close();
    })
    .catch((err) =>
      console.log(`An error occurred while creating stores: ${err}`)
    );
});
