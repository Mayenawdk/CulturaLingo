const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/culturalingo';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;
