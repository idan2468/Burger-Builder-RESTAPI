const Order = require('../models/order');
const Customer = require('../models/customer')
// GET => /orders
exports.getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find().populate('customer');
        console.log(orders);
        res.status(200).json(orders.map(order => order._doc));
    } catch (e) {
        throw new Error(e);
    }
}

// PUT => /order

exports.createOrder = async (req, res, next) => {
    console.log('CreateOrder');
    const price = Number(req.body.price);
    const ingredients = req.body.ingredients;
    const customerDetails = req.body.customer;
    try {
        const customer = new Customer({...customerDetails});
        await customer.save();
        const newOrder = new Order({price: price, burgerIngredients: ingredients, customer: customer._id});
        await newOrder.save();
        return res.status(200).json("success");
    } catch (err) {
        next(new Error(err));
    }
}