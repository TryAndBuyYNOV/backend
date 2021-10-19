const Cart = require ('../../models/cart.model');

module.exports = {
    Query : {
        carts: () => {
            const res = Cart.find().populate('products').populate('user').catch((err)=>console.log(err));
            return res;
        },

        cart: (parent, args) => {
            console.log("Get cart by id :", args.id);
            return Cart.findById(args.id);
        }
    },
    Mutation : {
        createCart : (parent, args) => {
            const newCart = new Cart ({
                totalAmount: args.totalAmount,
                deliveryPrice: args.deliveryPrice,
                user: args.user,
                products: args.products,
            });
            return newCart.save();
        },
        deleteCart: (parent, args) => {
            return Cart.findByIdAndDelete(args.id).catch((err)=>console.log(err));
        }
    },
}
