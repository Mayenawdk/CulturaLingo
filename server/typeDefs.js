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

  type City {
    id: ID!
    name: String!
    country: Country!   # This establishes a relationship to Country
  }

  type Country {
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
    cities: [City]
    countries: [Country]
    city(id: ID!): City
    country(id: ID!): Country
    foods: [Food]        
    food(id: ID!): Food   
  }

  type Mutation {
    addUser(name: String!, email: String!): User
    addLanguage(name: String!): Language
    addCity(name: String!, countryId: ID!): City   # Changed countryid to countryId for clarity
    addCountry(name: String!): Country
    addFood(name: String!): Food
    updateFood(id: ID!, name: String!): Food  # Added id to update Food
  }
`;

module.exports = typeDefs;
