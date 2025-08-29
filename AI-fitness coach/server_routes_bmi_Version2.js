const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { weight, height } = req.body; // weight in kg, height in cm
  if (!weight || !height) return res.status(400).json({ error: 'Missing parameters.' });
  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);
  res.json({ bmi: parseFloat(bmi.toFixed(2)) });
});

module.exports = router;