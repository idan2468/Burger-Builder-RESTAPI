const express = require('express');
const {login, register} = require('../controllers/auth')
const router = new express.Router();
const {body} = require('express-validator');

// Validation
const loginValidation = [body('username').isAlphanumeric(), body('password').isLength({min: 8})]
const registerValidation = loginValidation.concat([body('email').isEmail()]);

// Routes
router.post('/login', loginValidation, login);

router.post('/register', registerValidation, register);

module.exports = router;
