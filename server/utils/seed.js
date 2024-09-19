// Imports
const { Image } = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");

// Seed data
const imgs = [
  {
    picture: '/icons/koalaICON.jpg'
  },
  {
    picture: '../../public/icons/koalaICON.jpg'
  },
];

// Connects to server
connection.once("open", async () => {
  console.log("connected");

  // Drop existing images
  await Image.deleteMany({});

  // Adds seed data to database
  await Image.collection.insertMany(imgs);
  
  console.info("Seeding complete!");
  process.exit(0);
});