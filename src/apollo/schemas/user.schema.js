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
        address: Address
        role: Role!
    }
    type Address {
        lat: Float!
        lng: Float!
        localisation: String!
    }
    input AddressInput {
        lat: Float!
        lng: Float!
        localisation: String!
    }
    type SignIn {
        auth: Boolean
        token: String
    }
    extend type Query {
        users: [User]
        user(id: ID!): User
        login(email: String!, password: String!): SignIn
        logout: SignIn
    }
    extend type Mutation {
        createUser(firstName: String!, lastName: String!,phoneNumber:String!,address: AddressInput, email: String!, password: String!, avatar: String!,role:String!): User
        updateUser(id:ID!,firstName: String!, lastName: String!, phoneNumber: String!,address:AddressInput, email: String!, password: String!, avatar: String!,role:String!): User
        deleteUser(id:ID!): User

    }
`;
