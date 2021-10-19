const {gql} = require('apollo-server-express');

module.exports = gql`
    type Cart {
        id: ID!
        totalAmount: Float!
        deliveryPrice: Float!
        user: User
        products: [Product]
    }
    extend type Query {
        carts: [Cart]
        cart(id: ID!): Cart
    }
    extend type Mutation {
        createCart(totalAmount: Float!,deliveryPrice: Float!,user: ID,products: [ID]): Cart
        updateCart(id:ID!,totalAmount: Float!,deliveryPrice: Float!,user: ID,products: [ID]): Cart
        deleteCart(id:ID!): Cart
    }
`;