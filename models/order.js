const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const orderSchema = new Schema({
    price: {required: true, type: Number},
    userId: {default: 1, type: Number},
    burgerIngredients: {
        type: {
            cheese: {Number, default: 0},
            salad: {Number, default: 0},
            bacon: {Number, default: 0},
            meat: {Number, default: 0}
        },
        default: {
            cheese: 0,
            salad: 0,
            bacon: 0,
            meat: 0
        }
    },
    customer: {
        type: Schema.Types.ObjectId, ref: 'customer'
    },
    user: {
        type: Schema.Types.ObjectId
    }
}, {timestamps: true})

module.exports = mongoose.model('Order', orderSchema);