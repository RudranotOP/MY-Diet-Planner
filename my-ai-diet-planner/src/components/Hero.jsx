// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import mealImage from '../assets/float2.png';
import BMICalculator from './BMICalculator';
import { useNavigate } from 'react-router-dom'; // ✅ React Router hook

const Hero = () => {
  const tips = [
    "🥗 Eat a variety of colorful fruits and vegetables.",
    "🚶‍♂️ Walk at least 30 minutes every day.",
    "🧘‍♀️ Practice mindfulness or meditation for 10 mins.",
    "🍎 Avoid processed foods and sugary drinks.",
    "😴 Get at least 7-8 hours of sleep every night.",
    "🏋️‍♀️ Do light exercise to stay active and boost mood.",
  ];

  const [currentTip, setCurrentTip] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showBMI, setShowBMI] = useState(false);
  const navigate = useNavigate(); // ✅ React Router hook

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentTip((prev) => (prev + 1) % tips.length);
        setVisible(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Eat Smart, Live Better</h1>
          <p>Your personalized AI-powered meal planner</p>
          <div className={`daily-tip ${visible ? 'visible' : ''}`}>
            {tips[currentTip]}
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <button
              className="primary-btn"
              onClick={() => navigate('/generate-meal-plan')} // ✅ Navigate on click
            >
              Generate Meal Plan
            </button>
            <button
              className="primary-btn"
              style={{ marginLeft: '1rem' }}
              onClick={() => setShowBMI(true)}
            >
              Check BMI
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={mealImage}
            alt="Healthy Meal"
            className="floating-meal shifted-right"
          />
        </div>
      </section>

      {showBMI && <BMICalculator onClose={() => setShowBMI(false)} />}
    </>
  );
};

export default Hero;
