const User = require('../../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');

module.exports = {
  Query: {
    users: () => {
        const res = User.find().catch((err)=>console.log(err));
        return res;
    },
    user: (parent, args) => {
      console.log("Get user by id :",args.id);
      return User.findById(args.id).catch((err)=>console.log(err));
    },
    login: (parent, args) => {
      const email = args.email;
      return User.findOne({ email:email })
      .then((user) => {
        if(!user) {
          throw new UserInputError(`invalid ${email} value`);
        }
        let passwordIsValide = bcrypt.compareSync(args.password, user.password);
        if(!passwordIsValid){
          throw new AuthenticationError(`invalid ${password} value`);
        }
        const token = jwt.sign({
          id: user._id,
          admin: user.isAdmin
        },
        process.env.SECRET,
        {
          expiresIn: EXPIRE_IN_ONE_DAY
        });
        const result = {auth: true, token};
        return(result);
      })
      .catch((err) => {
        throw err;
      })
    },
    logout: () => {
      const result = {
        auth: false,
        token: null
      };
      return (result);
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
    },
    register: (root, args) => {
      let hashedPassword = bcrypt.hashSync(args.user.password, 10);
      const newUser = new User({
          firstName: args.user.firstName,
          lastName: args.user.lastName,
          email: args.user.email,
          password: hashedPassword,
          age: args.user.age,
          isAdmin: args.user.isAdmin
      });
      return newUser.save();
  }
  },
};
