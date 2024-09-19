const User = require('./models/User');
const Language = require('./models/languages');
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
     async cities() {
      const response = await axios.get(`${API_URL}cities`, {
        headers: {
          'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
          'x-rapidapi-key': '449134927emsh5c9b7a554d90d46p17b74djsnca468ddc31ea'
        }
      });
      return response.data;
    },
    async countries() {
      const response = await axios.get(`${API_URL}countries`, {
        headers: {
          'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
          'x-rapidapi-key': '449134927emsh5c9b7a554d90d46p17b74djsnca468ddc31ea'
        }
      });
      return response.data; 
    },
    async city(_, { id }) {
      const response = await axios.get(`${API_URL}cities/${id}`, {
        headers: {
          'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
          'x-rapidapi-key': '449134927emsh5c9b7a554d90d46p17b74djsnca468ddc31ea'
        }
      });
      return response.data; 
    },
    async country(_, { id }) {
      const response = await axios.get(`${API_URL}countries/${id}`, {
        headers: {
          'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
          'x-rapidapi-key': '449134927emsh5c9b7a554d90d46p17b74djsnca468ddc31ea'
        }
      });
      return response.data; 
    }
  },
  Mutation: {
  
      async addCity(_, { name, countryId }) {
        try {
          const response = await axios.post(`${API_URL}cities`, {
            name: name,
            countryId: countryId
          }, {
            headers: {
              'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
              'x-rapidapi-key': 'AP449134927emsh5c9b7a554d90d46p17b74djsnca468ddc31ea',
              'Content-Type': 'application/json'
            }
          });
    
          return response.data; 
        } catch (error) {
          console.error("Error adding city:", error);
          throw new Error("Failed to add city");
        }
      
    },
    
    async addCountry(_, { name }) {
      try {
        const response = await axios.post(`${API_URL}countries`, {
          name: name
        }, {
          headers: {
            'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
            'x-rapidapi-key': '449134927emsh5c9b7a554d90d46p17b74djsnca468ddc31ea',
            'Content-Type': 'application/json'
          }
        });
  
        return response.data; 
      } catch (error) {
        console.error("Error adding country:", error);
        throw new Error("Failed to add country");
      }
    },
  }
};
  



module.exports = resolvers;
