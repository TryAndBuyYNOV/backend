const {gql} = require('apollo-server-express');

module.exports = gql`
  type Cart {
    cartId: ID!
    userId: ID
    productId: ID
    cartStatus: String
  }
`;
