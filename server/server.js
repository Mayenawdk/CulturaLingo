const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;


const server = new ApolloServer({
  typeDefs,
  resolvers
});

//start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });