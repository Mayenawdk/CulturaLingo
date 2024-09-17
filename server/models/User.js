const moongose = require('./connection');

const {Schema} = moongose;

//User schemaaa

const userSchema = new Schema({
    name: { type: String, required: true },
    user_id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
      },
  });
  
 
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;