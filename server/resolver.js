const User = require('./models/User');
const Language = require('./models/Language');

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
    }
  }
};

module.exports = resolvers;
