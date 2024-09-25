const mongoose = require('./connection'); 

const { Schema } = mongoose; 

// User schema
const userSchema = new Schema({
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"]
    },
    user_id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
      },
      img: {
        type: Schema.Types.ObjectId,
        ref: 'Image',
        required: false
      },
      favefood: {
        type: String,
        default: "What's your favorite food?"
      },
      favecountry: {
        type: String,
        default: "What's your favorite country?"
      },
      favecity: {
        type: String,
        default: "What's your favorite city?"
      }
  });
  
 
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;