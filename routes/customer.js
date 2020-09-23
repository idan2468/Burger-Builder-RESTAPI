const express = require('express');
const {getCustomers} = require('../controllers/customer')
const router = new express.Router();


router.get('/customers', getCustomers);

module.exports = router;
