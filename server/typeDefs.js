const { gql } = require('apollo-server');


const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    img: String
    favefood: String
    favecountry: String
    favecity: String
  }

  type Language {
    id: ID!
    name: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
    languages: [Language]
    language(id: ID!): Language
  }

  type Mutation {
    addUser(name: String!, email: String!): User
    addLanguage(name: String!): Language
  }

  type Image{
    id: ID!
    picture: String!
  }
`;

module.exports = typeDefs;
