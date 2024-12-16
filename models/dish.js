const mongoose = require('mongoose');

const sizeSchema = new mongoose.Schema({
  portion: String,
  price: Number
});

const dishSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  imageUrl: String,
  sizes: [sizeSchema],
  price: Number
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;