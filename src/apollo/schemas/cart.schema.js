const {gql} = require('apollo-server-express');
const User = require('./user.schema');

module.exports = gql`
type Cart {
    id: ID!
    totalAmount: Number!
    user: User
  }
  extend type Query {
    products: [Product]
    product(id: ID!): Product
  }
  extend type Mutation {
    createProduct(title: String!, priceHT: Float!, description: String!,category: String!): Product
    updateProduct(id:ID!,title: String!, priceHT: Float!, description: String!,category: String!): Product
    deleteProduct(id:ID!): Product
  }
`;