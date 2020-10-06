//todo: maybe save jwt in cookie instead of in the localstorage at the client.
//todo: add jwt refresh token.

// Imports
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const orderRouter = require('./routes/order');
const ingredientRouter = require('./routes/ingredient');
const authRoutes = require('./routes/auth');
const customersRoutes = require('./routes/customer');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT

const MONGO_URI = process.env.MONGO_URI
// Configs middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// Import Routes
app.use(orderRouter);
app.use(ingredientRouter);
app.use(customersRoutes);
app.use(authRoutes);

// Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    next();
});

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    app.listen(4000, () => {
        console.log(`listening to port ${PORT}`)
    })
});
