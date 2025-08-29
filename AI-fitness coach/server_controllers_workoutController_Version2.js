const Workout = require('../models/Workout');

exports.logWorkout = async (req, res) => {
  try {
    const workout = new Workout(req.body);
    await workout.save();
    res.status(201).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: req.params.userId });
    res.json(workouts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};