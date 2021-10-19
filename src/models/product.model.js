const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: String,
    priceHT: Number,
    description: String,
    imgUrl: [String],
    category: {
        type: String,
        enum: ['Shoes','TShirt','Pants','Jacket','Coat','Accessory'],
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);