const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  type: String,
  duration: Number,
  caloriesBurned: Number,
  reps: Number,
});

module.exports = mongoose.model('Workout', workoutSchema);