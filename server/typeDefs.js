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

  type City {

  id: ID!
  name: String!
  country : Country!

}

type Country {
id : ID!
name : String!

}

type Query {
  cities : [City]
  countries : [Country]
  city (id:ID) : City
  country ( id:ID):Country


}

type Mutation {
addCity(name:String!,countryid:ID!): City
addCountry(name:String!):Country

}

 type Image{
    id: ID!
    picture: String!
  }
`;

module.exports = typeDefs;
