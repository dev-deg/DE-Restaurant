require('dotenv').config();
const mongoose = require('mongoose');
const Dish = require('./models/dish');
const Drink = require('./models/drink');

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@dbe.3n2g7.mongodb.net/restaurant?retryWrites=true&w=majority&appName=dbe`;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function fetchFood() {
  try {
    await mongoose.connect(uri, clientOptions);
    const food = await Dish.find({});
    console.log("Food items:", food);
    return food;
  } catch (error) {
    console.error("Error fetching food:", error);
  } finally {
    await mongoose.disconnect();
  }
}

async function fetchDrinks() {
  try {
    await mongoose.connect(uri, clientOptions);
    const drinks = await Drink.find({});
    console.log("Drink items:", drinks);
    return drinks;
  } catch (error) {
    console.error("Error fetching drinks:", error);
  } finally {
    await mongoose.disconnect();
  }
}

async function run() {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
    // Fetch food and drinks
    const food = await fetchFood();
    const drinks = await fetchDrinks();
  } finally {
    await mongoose.disconnect();
  }
}

run().catch(console.dir);
