require('dotenv').config();
console.log('MONGODB_URI:', process.env.MONGODB_URI);

const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());

const typeDefs = require('./typeDefs');
const resolvers = require('./resolver'); 

// trying this, keep seeing if react app and apollo server are on different ports must use cors middleware
app.use(cors());

// start apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  path: '/graphql',
  playground: true,
  csrfPrevention: false,
});

//api endpoint
app.get('/api/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    res.status(500).json({ message: 'Server error' });
  }
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



