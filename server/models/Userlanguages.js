const mongoose = require('./connection');

const { Schema } = mongoose;


const userLanguageSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  language_id: { type: Schema.Types.ObjectId, ref: 'Language', required: true },
  primary: { type: Boolean, default: false }
});

const UserLanguage = mongoose.model('UserLanguage', userLanguageSchema);

module.exports = UserLanguage;
