const express = require('express');
const bodyParser = require('body-parser');
const orderRouter = require('./routes/order');
const ingredientRouter = require('./routes/ingredient');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


const MONGO_URI = "mongodb+srv://idan2468:0509496620@idans.xvear.mongodb.net/burger-builder?retryWrites=true&w=majority";

app.use(cors());
app.use(bodyParser.json());

app.use(orderRouter);
app.use(ingredientRouter);

app.use((err, req, res, next) => {
    console.log("Here")
    console.log(err)
    next();
});

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    app.listen(4000, () => {
        console.log('listening')
    })
});
