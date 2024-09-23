require('dotenv').config();
console.log('MONGODB_URI:', process.env.MONGODB_URI);

const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');


const typeDefs = require('./typeDefs');
const resolvers = require('./resolver'); 

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());

// start apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  path: '/graphql',

  csrfPrevention: false,
});

async function startServer() {
  await server.start();
  app.use('/graphql', expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/graphql`);
  });
}

startServer().catch(err => {
  console.error('Error starting the server', err);
});

//deleted comments



