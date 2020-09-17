const express = require('express');
const {createOrder, getOrders} = require('../controllers/order');

const router = new express.Router();

router.get('/orders', getOrders);

router.put('/order', createOrder);

module.exports = router;