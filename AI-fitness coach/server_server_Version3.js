const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/user');
const workoutRoutes = require('./routes/workout');
const bmiRoutes = require('./routes/bmi');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/user', userRoutes);
app.use('/api/workout', workoutRoutes);
app.use('/api/bmi', bmiRoutes);

app.get('/', (req, res) => {
  res.send('AI Fitness Coach Backend');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));