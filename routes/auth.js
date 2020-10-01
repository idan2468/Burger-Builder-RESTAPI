const express = require('express');
const {login, register} = require('../controllers/auth')
const router = new express.Router();


router.post('/login', login);

router.post('/register', register);

module.exports = router;
