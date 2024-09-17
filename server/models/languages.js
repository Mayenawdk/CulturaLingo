const mongoose = require('./connection'); 

const { Schema } = mongoose;

//Language schema
const languageSchema = new Schema({
    Id: {type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
      },
  name: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
});

const Language = mongoose.model('Language', languageSchema);

module.exports = Language;
