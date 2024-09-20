const moongose = require('./server/connection.js');

const {Schema} = moongose;

//User schema

const imageSchema = new Schema({
      id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
      },
      picture: {
        type: String,
        required: true
      }
  });
  
 
  const Image = mongoose.model('Image', imageSchema);
  
  module.exports = Image;