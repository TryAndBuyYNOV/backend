const Cart = require ('../schemas/cart.schema');

module.exports = {
    Query : {
        Carts : () => {
            return Cart.find()
            .populate('products').populate('user');
        },

        Cart: (parent, args) => {
            console.log("Get by id :", args.id);
            return Cart.findById(args.id);
        }
    },
    Mutation : {
        createCart : (parent, args) => {
            const newCart = new Cart ({
                amountTotal: args.amountTotal,
                user : args.user,
                products: args.products,
            });
            return newCart.save();
        },
        deleteCart: (parent, args) => {
            return Cart.findByIdAndDelete(args.id).catch((err)=>console.log(err));
        }
    },
}
