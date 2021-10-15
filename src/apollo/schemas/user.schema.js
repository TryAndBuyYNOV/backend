const {gql} = require('apollo-server-express');

module.exports = gql`
    enum Role {
        Buyer,
        Seller,
        Admin
    }
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        phoneNumber: String!
        email: String!
        password: String!
        avatar: String
        address: String!
        role: Role
    }
    extend type Query {
        users: [User]
        user(id: ID!): User
    }
    extend type Mutation {
        createUser(firstName: String!, lastName: String!,phoneNumber:String!,address:String!, email: String!, password: String!, avatar: String!,role:String!): User
        updateUser(id:ID!,firstName: String!, lastName: String!, phoneNumber:String!,address:String!, email: String!, password: String!, avatar: String!,role:String!): User
        deleteUser(id:ID!): User
    }
`;
