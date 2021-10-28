const Product = require('../../models/product.model');

module.exports = {
  Query: {
    products: () => {
        const res = Product.find().catch((err)=>console.log(err));
        return res;
    },
    product: (parent, args) => {
      console.log("Get product by id :",args.id);
      return Product.findById(args.id).catch((err)=>console.log(err));
    }
  },
  Mutation: {
    createProduct: (parent, args) => {
      const newProduct = new Product({
        title: args.title,
        priceHT: args.priceHT,
        description: args.description,
        category: args.category,
        images: args.imgUrl,
        status: args.status
      });
      return newProduct.save();
    },
    updateProduct: (parent, args) => {
        const res = Product.findByIdAndUpdate(args.id,{title:args.title,priceHT:args.priceHT,description: args.description,images:args.imgUrl,category:args.category,status: args.status}).catch((err)=>{console.log(err)});
        return res;
    },
    deleteProduct: (parent, args) => {
        return Product.findByIdAndDelete(args.id).catch((err)=>console.log(err));
    }
  },
};
