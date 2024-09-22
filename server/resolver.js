const User = require('./models/User');
const Language = require('./models/languages');
const Food = require('./models/Food');
const axios = require ('axios');

const API_URL = 'https://worldwide-restaurants.p.rapidapi.com/';
const API_KEY = '449134927emsh5c9b7a554d90d46p17b74djsnca468ddc31ea';

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async (parent, args) => {
      return await User.findById(args.id);
    },
    languages: async () => {
      return await Language.find();
    },
    language: async (parent, args) => {
      return await Language.findById(args.id);
    },
    Foods: async () => {
      return await Food.find();
    },
    // im not sure this is correct i went based off geris work
    Food: async (_, args) => {
      return await Food.findById(args.id);
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = new User({
        name: args.name,
        email: args.email
      });
      return await user.save();
    },
    addLanguage: async (parent, args) => {
      const language = new Language({
        name: args.name
      });
      return await language.save();
    },
    // mern activity 9 > schemas
    addFood: async (_, args) => {
      return await Food.create(_, args);
    },
    // mern activity 10 > schemas
    updateFood: async(_, args) => {
      return await Food.findByIdAndUpdate(
        { _id: id },
        { location },
        { new: true}
      );
    }
    }
  }
;

module.exports = resolvers;
