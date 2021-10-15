const {gql} = require('apollo-server-express');

module.exports = gql`
    type Cart {
        id: ID!
        totalAmount: Number!
        deliveryPrice: Number!
        user: String!
        products: [String!]
    }
    extend type Query {
        carts: [Cart]
        cart(id: ID!): Cart
    }
    extend type Mutation {
        createCart(totalAmount: Number!,deliveryPrice: Number!,user: String!,products: [String!]): Cart
        updateCart(id:ID!,totalAmount: Number!,deliveryPrice: Number!,user: String!,products: [String!]): Cart
        deleteCart(id:ID!): Cart
    }
`;