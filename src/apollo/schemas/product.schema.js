const {gql} = require('apollo-server-express');

module.exports = gql`
  enum Category {
      Shoes,
      TShirt,
      Pants,
      Jacket,
      Coat,
      Accessory
  }
  enum Status {
    ToSell,
    SellingInProgress,
    Selled
  }
  type Product {
    id: ID!
    title: String!
    priceHT: Float!
    description: String!
    imgUrl: [String!]
    category: Category!
    status: Status!
  }
  extend type Query {
    products: [Product]
    product(id: ID!): Product
  }
  extend type Mutation {
    createProduct(title: String!, priceHT: Float!, description: String!,category: String!,imgUrl: [String!],status: String!): Product
    updateProduct(id:ID!,title: String!, priceHT: Float!, description: String!,category: String!,imgUrl: [String!], status: String!): Product
    deleteProduct(id:ID!): Product
  }
`;
