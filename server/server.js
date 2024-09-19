require('dotenv').config();
console.log('MONGODB_URI:', process.env.MONGODB_URI);

const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolver');

const app = express();


const PORT = process.env.PORT || 3001;


const server = new ApolloServer({
  typeDefs,
  resolvers
});


server.listen({ port: PORT }).then(({ url }) => {
  console.log(`Server running at ${url}`);
}).catch(err => {
  console.error('Error starting the server', err);
});

server.applyMiddleware({ app });