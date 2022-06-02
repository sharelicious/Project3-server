const mongoose = require("mongoose");
require("../db");
const Store = require("../models/Store.model");

const stores = [
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/910f2db2-c57d-4098-b73d-93656199fa4e.jpg",
    storeName: "Shake Shack",
    storeAddress: "20 3rd Avenue",
    storePhone: "+16468132190",
    deliveryTime: "15-30 min",
    priceRange: "$",
    cuisineType: "Burgers"
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/5fac858d-6717-4790-93b8-69b4d645ac9c.jpeg",
    storeName: "Bronson's Burgers",
    storeAddress: "250 Mulberry Street",
    storePhone: "+12128886280",
    deliveryTime: "15-30 min",
    priceRange: "$",
    cuisineType: "Burgers"
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/910f2db2-c57d-4098-b73d-93656199fa4e.jpg",
    storeName: "Shake Shack",
    storeAddress: "20 3rd Avenue",
    storePhone: "+16468132190",
    deliveryTime: "15-30 min",
    priceRange: "$",
    cuisineType: "Burgers"
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/8745.jpg",
    storeName: "Bareburger",
    storeAddress: "173 Orchard Street",
    storePhone: "+12125108610",
    deliveryTime: "15-30 min",
    priceRange: "$",
    cuisineType: "Burgers"
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/270a66a4-21fc-480c-bfc2-d33a4fb02839.jpg",
    storeName: "Black Burger",
    storeAddress: "386 Canal Street",
    storePhone: "+12124317651",
    deliveryTime: "15 min",
    priceRange: "$",
    cuisineType: "Burgers"
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/19846.jpg",
    storeName: "Joe's Pizza",
    storeAddress: "150 East 14th Street",
    storePhone: "+12123889474",
    deliveryTime: "30-45 min",
    priceRange: "$",
    cuisineType: "Pizza"
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/2fce7a5d-1389-46c7-a975-6637515893cb.jpeg",
    storeName: "Artichoke Basille's Pizza",
    storeAddress: "321 East 14th Street",
    storePhone: "+12124317651",
    deliveryTime: "15-30 min",
    priceRange: "$",
    cuisineType: "Pizza"
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/5fb0ea43-7c54-4257-94bc-6c12fb91e0cf.jpg",
    storeName: "Village Square Pizza",
    storeAddress: "147 Avenue A",
    storePhone: "++19176757709",
    deliveryTime: "15 min",
    priceRange: "$",
    cuisineType: "Pizza"
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/30655.jpg",
    storeName: "Bleecker Street Pizza",
    storeAddress: "69 7th Avenue South",
    storePhone: "+19175432014",
    deliveryTime: "15-30 min",
    priceRange: "$",
    cuisineType: "Pizza"
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/1b91df9e-ad5b-42d5-aff5-4aa8187c62eb.jpg",
    storeName: "99 Cent Fresh Pizza",
    storeAddress: "383 Canal Street",
    storePhone: "+12129661110",
    deliveryTime: "15-30 min",
    priceRange: "$$",
    cuisineType: "Pizza"
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/361508f6-8125-49ef-b927-236d97f5cf1d.jpeg",
    storeName: "New Mizu Sushi",
    storeAddress: "350 East 9th Street",
    storePhone: "+16469985453",
    deliveryTime: "15-30 min",
    priceRange: "$$",
    cuisineType: "Sushi"
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/4cde790a-9a6e-484b-90f8-c8ee1dce03e9.jpg",
    storeName: "DOMODOMO New York",
    storeAddress: "140 West Houston Street",
    storePhone: "+16467070301",
    deliveryTime: "15-30 min",
    priceRange: "$$",
    cuisineType: "Sushi"
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/2192ef65-0a83-4bd3-8fd3-473aa01be67d.546",
    storeName: "Sushi Hatsune",
    storeAddress: "50 Eldridge Street",
    storePhone: "+12123010723",
    deliveryTime: "15-30 min",
    priceRange: "$",
    cuisineType: "Sushi"
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/50ea62ab-be7b-495c-a80c-7a3b621aca6b.jpg",
    storeName: "Nara Sushi",
    storeAddress: "76 Pearl Street",
    storePhone: "+16467200202",
    deliveryTime: "30-45 min",
    priceRange: "$$",
    cuisineType: "Sushi"
  },
  {
    storeImg: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/6c1f2f89-4520-4892-9f11-a52e9ac68af7.png",
    storeName: "Asuka Sushi",
    storeAddress: "300 West 23rd Street",
    storePhone: "+12127270888",
    deliveryTime: "30-45 min",
    priceRange: "$$",
    cuisineType: "Sushi"
  },

];

Store.deleteMany().then(() => {
  Store.create(posts)
    .then((storeFromDb) => {
      console.log("Created", storeFromDb.length, "stores");
      mongoose.connection.close();
    })
    .catch((err) =>
      console.log(`An error occurred while creating stores: ${err}`)
    );
});
