const mongoose = require('./connection'); 

const { Schema } = mongoose;

//Culture schema
const cultureSchema = new Schema({
  title: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});


const Culture = mongoose.model('Culture', cultureSchema);

module.exports = Culture;
