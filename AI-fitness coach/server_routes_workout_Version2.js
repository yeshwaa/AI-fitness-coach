const express = require('express');
const router = express.Router();
const { logWorkout, getWorkouts } = require('../controllers/workoutController');

router.post('/', logWorkout);
router.get('/:userId', getWorkouts);

module.exports = router;