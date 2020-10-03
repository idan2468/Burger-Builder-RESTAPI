const express = require('express');
const {createOrder, getOrders,getOrdersById} = require('../controllers/order');
const isAuth = require('../middleware/isAuth');
const router = new express.Router();
// Routes

router.post('/orders', isAuth, getOrders);

router.post('/orders/:id', isAuth, getOrdersById);

router.put('/order', isAuth, createOrder);

module.exports = router;