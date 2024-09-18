const moongose = require('./server/connection.js');

const {Schema} = moongose;

//User schema

const userSchema = new Schema({
    name: { type: String, required: true },
    user_id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
      },
      img: {
        type: Schema.Types.ObjectId,
        ref: 'Images',
        required: false
      }
  });
  
 
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;