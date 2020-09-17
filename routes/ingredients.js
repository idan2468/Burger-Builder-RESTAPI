const express = require('express');
const {getIngredients} = require('../controllers/ingredients')
const router = new express.Router();

router.get('/ingredients', getIngredients);