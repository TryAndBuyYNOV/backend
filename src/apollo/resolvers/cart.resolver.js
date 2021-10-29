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
        createCart: (parent, args) => {
            const newCart = new Cart ({
                totalAmount: args.totalAmount,
                deliveryPrice: args.deliveryPrice,
                user: args.user,
                products: args.products,
                cartStatus: args.cartStatus
            });
            return newCart.save();
        },
        updateCart: (parent, args) => {
            return Cart.findByIdAndUpdate(args.id,{totalAmount: args.totalAmount, deliveryPrice: args.deliveryPrice, user: args.user, products: args.products,cartStatus: args.cartStatus}).catch((err)=>console.log(err));
        },
        deleteCart: (parent, args) => {
            return Cart.findByIdAndDelete(args.id).catch((err)=>console.log(err));
        }
    },
}
