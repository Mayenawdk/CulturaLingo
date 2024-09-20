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

// start apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  path: '/graphql',
});

async function startServer() {
  await server.start();
  app.use('/custom/graphql', expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/graphql`);
  });
}

startServer().catch(err => {
  console.error('Error starting the server', err);
});





// const { typeDefs } = require('./typeDefs');
// const { resolvers } = require('./resolver');
// const db = require('./');

// const PORT = process.env.PORT || 3001;
// const app = express();
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// const startApolloServer = async () => {
//   await server.start();
  
//   app.use(express.urlencoded({ extended: true }));
//   app.use(express.json());
  
//   app.use('/graphql', expressMiddleware(server));

  
//   if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client')));

//     app.get('*', (req, res) => {
//       res.sendFile(path.join(__dirname, '../client/index.html'));
//     });
//   } 



//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
//     });
//   });
// };

