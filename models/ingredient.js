const mongoose = new require('mongoose');
const Schema = mongoose.Schema;

const ingredientsSchema = new Schema({
    name: {type: String, required: true},
    label: {
        type: String, default: function () {
            return this.name.charAt(0).toUpperCase() + this.name.slice(1);
        }
    },
    dairy: {type: Boolean, default: false},
    price: {type: Number, required: true}
})


module.exports = mongoose.model('ingredient', ingredientsSchema);