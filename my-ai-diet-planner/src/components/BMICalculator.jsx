// src/components/BMICalculator.jsx
import React, { useState } from 'react';
import '../styles/BMICalculator.css';

const BMICalculator = ({ onClose }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [colorClass, setColorClass] = useState('');

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // convert cm to meters

    if (!w || !h || h === 0) {
      setBmi(null);
      setCategory('');
      setColorClass('');
      return;
    }

    const bmiValue = w / (h * h);
    const roundedBMI = bmiValue.toFixed(1);
    setBmi(roundedBMI);

    if (bmiValue < 18.5) {
      setCategory('Underweight');
      setColorClass('underweight');
    } else if (bmiValue < 25) {
      setCategory('Normal');
      setColorClass('normal');
    } else if (bmiValue < 30) {
      setCategory('Overweight');
      setColorClass('overweight');
    } else {
      setCategory('Obese');
      setColorClass('obese');
    }
  };

  return (
    <div className="bmi-overlay">
      <div className="bmi-modal">
        <span className="bmi-close" onClick={onClose}>&times;</span>
        <h2>Check Your BMI</h2>

        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <button className="primary-btn" onClick={calculateBMI}>
          Calculate
        </button>

        {bmi && (
          <div className={`bmi-result-circle ${colorClass}`}>
            <div className="bmi-pulse">
              <span className="bmi-value">{bmi}</span>
            </div>
            <p>Category: <strong>{category}</strong></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
