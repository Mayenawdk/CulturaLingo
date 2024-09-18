require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolver');

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error('MONGODB_URI is not defined in .env file');
  process.exit(1);
}


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
