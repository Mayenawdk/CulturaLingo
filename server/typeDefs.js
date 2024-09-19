const { gql } = require('apollo-server');


const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Language {
    id: ID!
    name: String!
  }

  type Food {
    id: ID!
    name: String!
    location: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
    languages: [Language]
    language(id: ID!): Language
    Foods: [Food!]!
    Food(id: ID!): Food
  }

  type Mutation {
    addUser(name: String!, email: String!): User
    addLanguage(name: String!): Language
    addFood(name: String!, location: String!): Food!
    updateFood(name: String!, location: String!): Food!
  }
`;

module.exports = typeDefs;
