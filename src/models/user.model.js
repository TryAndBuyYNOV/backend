const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String,
    email: String,
    password: String,
    avatar: String,
    address: String,
    role: {
        type: String,
        enum: ['Buyer','Seller','Admin'],
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);