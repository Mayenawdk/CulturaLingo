const mongoose = require('./connection'); 

const { Schema } = mongoose; 

// User schema
const userSchema = new Schema({
  name: { type: String, required: true },
  user_id: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId() 
  },
});

const User = mongoose.model('User', userSchema); 

module.exports = User;
