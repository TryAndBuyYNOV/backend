const Cart = require('../../models/cart.model');

module.exports = {
  Query: {
    carts: () => {
        return Cart.find().catch((err)=>console.log(err));
    },
    cart: (parent, args) => {
      return Cart.findById(args.id).catch((err)=>console.log(err));
    },
    cartsByUserID: (parent, args) => {
      return Cart.find({userId: args.userId}).catch((err)=>console.log(err));
    }
  }
};
