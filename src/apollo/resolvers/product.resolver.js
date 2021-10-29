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
        userId: args.userId,
        title: args.title,
        priceHT: args.priceHT,
        description: args.description,
        category: args.category,
        images: args.imgUrl,
        productStatus: args.productStatus
      });
      return newProduct.save();
    },
    updateProduct: (parent, args) => {
        const res = Product.findByIdAndUpdate(args.id,{title:args.title,priceHT:args.priceHT,description: args.description,images:args.imgUrl,category:args.category,productStatus: args.productStatus}).catch((err)=>{console.log(err)});
        return res;
    },
    deleteProduct: (parent, args) => {
        return Product.findByIdAndDelete(args.id).catch((err)=>console.log(err));
    },
    deleteAllProduct: () => {
      Product.deleteMany().catch((err)=>console.log(err));
      return "";
    },
  },
};
