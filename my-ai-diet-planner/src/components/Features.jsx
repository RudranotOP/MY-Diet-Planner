// src/components/Features.jsx
import React from 'react';
import '../styles/Features.css';
import mealIcon from '../assets/meal.png';
import kcalIcon from '../assets/kcal.png';
import aiIcon from '../assets/ai meal.png';
import calendarIcon from '../assets/calendar.png';

const Features = () => {
  return (
    <section className="features" id="features">
      <h2>Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <img src={mealIcon} alt="Meals Icon" className="feature-icon" />
          <h3>🍽️ Personalized Meals</h3>
          <p>Get meals tailored to your health goals, dietary needs, and taste preferences using AI suggestions.</p>
        </div>

        <div className="feature-card">
          <img src={kcalIcon} alt="Calories Icon" className="feature-icon" />
          <h3>💪 Track Calories</h3>
          <p>Monitor your daily intake and stay on track with your fitness or weight goals effortlessly.</p>
        </div>

        <div className="feature-card">
          <img src={aiIcon} alt="AI Icon" className="feature-icon" />
          <h3>🧠 AI Suggestions</h3>
          <p>Let our smart engine analyze your inputs and recommend optimal meal combinations every day.</p>
        </div>

        <div className="feature-card">
          <img src={calendarIcon} alt="Calendar Icon" className="feature-icon" />
          <h3>📅 Weekly Plans</h3>
          <p>Plan your meals for the entire week with a balanced nutritional approach and minimal repetition.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
