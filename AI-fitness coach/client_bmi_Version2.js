function calculateBMI(weightKg, heightCm) {
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  return parseFloat(bmi.toFixed(2));
}

document.getElementById('bmi-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  if (weight > 0 && height > 0) {
    const bmi = calculateBMI(weight, height);
    document.getElementById('bmi-result').innerText = `Your BMI is ${bmi}`;
  } else {
    document.getElementById('bmi-result').innerText = 'Please enter valid values.';
  }
});