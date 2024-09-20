// Imports
const { Image } = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");

// Seed data
const imgs = [
  { picture: "/icons/BatIcon.jpg" }, { picture: "/icons/BearIcon.jpg" }, { picture: "/icons/BeeIcon.jpg" }, 
  { picture: "/icons/BugIcon.jpg" }, { picture: "/icons/ButterflyIcon.jpg" }, { picture: "/icons/CamelIcon.jpg" }, 
  { picture: "/icons/CatIcon.jpg" }, { picture: "/icons/Cheetah.jpg" }, { picture: "/icons/ChickenIcon.jpg" }, 
  { picture: "/icons/CowIcon.jpg" }, { picture: "/icons/CrocodileIcon.jpg" }, { picture: "/icons/DinoIcon.jpg" }, 
  { picture: "/icons/DogIcon.jpg" }, { picture: "/icons/DolphinIcon.jpg" }, { picture: "/icons/DoveIcon.jpg" }, 
  { picture: "/icons/DuckIcon.jpg" }, { picture: "/icons/EagleIcon.jpg" }, { picture: "/icons/ElephantIcon.jpg" }, 
  { picture: "/icons/FishIcon.jpg" }, { picture: "/icons/FlamingoIcon.jpg" }, { picture: "/icons/FoxIcon.jpg" }, 
  { picture: "/icons/FrogIcon.jpg" }, { picture: "/icons/GiraffeIcon.jpg" }, { picture: "/icons/GorillaIcon.jpg" }, 
  { picture: "/icons/HorseIcon.jpg" }, { picture: "/icons/KangorooIcon.jpg" }, { picture: "/icons/koalaICON.jpg" }, 
  { picture: "/icons/LeopardIcon.jpg" }, { picture: "/icons/LionIcon.jpg" }, { picture: "/icons/MonkeyIcon.jpg" }, 
  { picture: "/icons/PandaIcon.jpg" }, { picture: "/icons/ParrotIcon.jpg" }, { picture: "/icons/PenguinIcon.jpg" }, 
  { picture: "/icons/PigeonIcon.jpg" }, { picture: "/icons/RatIcon.jpg" }, { picture: "/icons/SharkIcon.jpg" }, 
  { picture: "/icons/SheepIcon.jpg" }, { picture: "/icons/SnakeIcon.jpg" }, { picture: "/icons/SpiderIcon.jpg" }, 
  { picture: "/icons/SquirrelIcon.jpg" }, { picture: "/icons/StarfishIcon.jpg" }, { picture: "/icons/TigerIcon.jpg" }, 
  { picture: "/icons/TurtleIcon.jpg" }, { picture: "/icons/WolfIcon.jpg" }, { picture: "/icons/ZebraIcon.jpg" },
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