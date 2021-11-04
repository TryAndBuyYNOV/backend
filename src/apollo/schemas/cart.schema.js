const {gql} = require('apollo-server-express');

module.exports = gql`
  type Cart {
    id: ID!
    userId: ID
    productId: ID
    cartStatus: String
  }

  extend type Query {
    carts: [Cart]
    cart(id: ID!): Cart
    cartsByUserID(userId: ID!): [Cart]
  }
`;
