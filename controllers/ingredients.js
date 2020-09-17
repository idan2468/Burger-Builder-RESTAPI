const Ingredients = require('../models/ingredient');


exports.getIngredients = (req, res, next) => {
    try {
        const ingredients = Ingredients.find();
        res.json(ingredients);
    } catch (err) {
        throw err;
    }

}