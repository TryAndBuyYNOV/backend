const {gql} = require('apollo-server-express');

module.exports = gql`
    enum CartStatus {
        Rejected,
        ValidateInProgress,
        Validated
    }
    type Cart {
        id: ID!
        totalAmount: Float!
        deliveryPrice: Float!
        user: User
        products: [Product]
        status: CartStatus!
    }
    extend type Query {
        carts: [Cart]
        cart(id: ID!): Cart
    }
    extend type Mutation {
        createCart(totalAmount: Float!,deliveryPrice: Float!,user: ID,products: [ID], status: String!): Cart
        updateCart(id:ID!,totalAmount: Float!,deliveryPrice: Float!,user: ID,products: [ID], status: String!): Cart
        deleteCart(id:ID!): Cart
    }
`;