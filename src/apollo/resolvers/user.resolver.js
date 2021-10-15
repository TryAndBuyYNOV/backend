const User = require('../../models/user.model');
// const Role = require('../../models/user.model');

module.exports = {
  Query: {
    users: () => {
        const res = User.find().catch((err)=>console.log(err));
        return res;
    },
    user: (parent, args) => {
      // console.log("Get user by id :",args.id);
      return User.findById(args.id).catch((err)=>console.log(err));
    }
  },
  Mutation: {
    createUser: (parent, args) => {
        const newUser= new User({
        firstName: args.firstName,
        lastName: args.lastName,
        phoneNumber: args.phoneNumber,
        address: args.address,
        email: args.email,
        password: args.password,
        avatar: args.avatar,
        role: args.role
      });
      return newUser.save();
    },
    updateUser: (parent, args) => {
        const res = User.findByIdAndUpdate(args.id,{firstName,lastName,email,password,avatar,role}).catch((err)=>{console.log(err)});
        return res;
    },
    deleteUser: (parent, args) => {
        return User.findByIdAndDelete(args.id).catch((err)=>console.log(err));
    }
  },
};
