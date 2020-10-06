const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let customerSchema = new Schema({
    fullName: String,
    email: String,
    address: {
        street: String,
        postalCode: Number,
        city: String
    },
    payMethod: String
})

module.exports = mongoose.model('customer', customerSchema);