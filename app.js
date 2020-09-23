// Imports
const express = require('express');
const bodyParser = require('body-parser');
const orderRouter = require('./routes/order');
const ingredientRouter = require('./routes/ingredient');
const customersRoutes = require('./routes/customer');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


const MONGO_URI = "mongodb+srv://idan2468:0509496620@idans.xvear.mongodb.net/burger-builder?retryWrites=true&w=majority";

// Configs middlewares
app.use(cors());
app.use(bodyParser.json());

// Import Routes
app.use(orderRouter);
app.use(ingredientRouter);
app.use(customersRoutes);

// Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    next();
});

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    app.listen(4000, () => {
        console.log('listening')
    })
});
