const express = require('express');
const router = express.Router();
const { fetchFood, fetchDrinks } = require('../db');

// Endpoint to get all food items
router.get('/food', async (req, res) => {
  try {
    const food = await fetchFood();
    res.json(food);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint to get all drink items
router.get('/drinks', async (req, res) => {
  try {
    const drinks = await fetchDrinks();
    res.json(drinks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
