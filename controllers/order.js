const Order = new require('../models/order');

exports.getOrders = async (req, res, next) => {
    console.log('GetOrder');
}

exports.createOrder = async (req, res, next) => {
    console.log('CreateOrder');
    const price = Number(req.body.price);
    const ingredients = req.body.ingredients;
    try {
        const newOrder = new Order({price: price, burgerIngredients: ingredients});
        await newOrder.save();
        return res.status(200).json("success");
    } catch (err) {
        next(new Error(err));
    }
}