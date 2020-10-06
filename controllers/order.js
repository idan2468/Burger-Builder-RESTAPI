const Order = require('../models/order');
const Customer = require('../models/customer')

// GET => /orders
exports.getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find().populate('customer');
        res.status(200).json(orders.map(order => order._doc));
    } catch (e) {
        throw new Error(e);
    }
}

// GET => /orders/:id
exports.getOrdersById = async (req, res, next) => {
    try {
        const orders = await Order.find({user: req.params.id}).populate('customer');
        res.status(200).json(orders.map(order => order._doc));
    } catch (e) {
        throw new Error(e);
    }
}

// PUT => /order
exports.createOrder = async (req, res, next) => {
    const price = Number(req.body.price);
    const ingredients = req.body.ingredients;
    const customerDetails = req.body.customer;
    const userId = req.body.userId;
    try {
        const customer = new Customer({...customerDetails});
        await customer.save();
        const newOrder = new Order({
            price: price,
            burgerIngredients: ingredients,
            customer: customer._id,
            user: userId
        });
        await newOrder.save();
        return res.status(200).json("success");
    } catch (err) {
        next(new Error(err));
    }
}