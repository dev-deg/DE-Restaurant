const mongoose = require('mongoose');

const sizeSchema = new mongoose.Schema({
  portion: String,
  price: Number
});

const drinkSchema = new mongoose.Schema({
  name: String,
  type: String,
  sizes: [sizeSchema],
  price: Number
});

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;
