const express = require('express');
const {getIngredients} = require('../controllers/ingredient')
const router = new express.Router();

// Routes

router.get('/ingredients', getIngredients);


module.exports = router;