const express = require('express');
const {createOrder, getOrders} = require('../controllers/order');
const isAuth = require('../middleware/isAuth');
const router = new express.Router();
// Routes

router.post('/orders', isAuth, getOrders);

router.put('/order', isAuth, createOrder);

module.exports = router;