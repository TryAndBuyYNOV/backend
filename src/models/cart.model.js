const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    totalAmount: Number,
    deliveryPrice: Number,
    user: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    products : [{
        type: Schema.Types.ObjectId, ref: 'Product'
    }]
},
    { timestamps: true }
);

module.exports = mongoose.model('Cart', cartSchema);