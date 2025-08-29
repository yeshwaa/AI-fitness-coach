const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  age: Number,
  height: Number,
  weight: Number,
  bmi: Number,
});

module.exports = mongoose.model('User', userSchema);