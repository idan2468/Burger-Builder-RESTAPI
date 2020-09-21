const Ingredient = require('../models/ingredient');

// GET => /ingredients
exports.getIngredients = async (req, res, next) => {
    try {
        const ingredients = await Ingredient.find();
        res.status(200).json(ingredients);
    }
    catch (err) {
        throw err;
    }
}