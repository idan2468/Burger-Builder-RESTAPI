const mongoose = new require('mongoose');
const Schema = mongoose.Schema;

const ingredientsSchema = new Schema({
    name: {type: String, required: true},
    dairy: {type: Boolean, default: false}
})


module.exports = mongoose.model('ingredient', ingredientsSchema);