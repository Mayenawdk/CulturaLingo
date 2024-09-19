const User = require('./models/User');
const Language = require('./models/languages');
const Food = require('./models/Food');

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
    }
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
    addFood: async (_, args) => {
      const Food = new Food({
        name: args.name,
        location: args.location
      });
      return await food.save();
    },

    // referenced module 21 MERN > activity 10 > solved > schemas > reolvers.js line 25
    updateFood: async (_, args) => {
      return await Food.findByIdAndUpdate(
        { _id: id },
        { location },
        { new: true }
      );
    }
  }
};

module.exports = resolvers;
