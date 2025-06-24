// src/components/HowItWorks.jsx
import React from 'react';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <h2 className="section-title">How It Works</h2>

      <div className="how-steps-pyramid">
        <div className="top-row">
          <div className="how-card animate-icon">
            <i className="fas fa-sliders-h how-icon"></i>
            <h3>Choose Preferences</h3>
            <p>
              Select your dietary needs, taste preferences, and health goals to personalize your journey.
            </p>
          </div>
          <div className="how-card animate-icon">
            <i className="fas fa-robot how-icon"></i>
            <h3>AI Generates Meals</h3>
            <p>
              Advanced AI creates nutritious and tasty meal plans tailored to your preferences.
            </p>
          </div>
        </div>

        <div className="bottom-row">
          <div className="how-card animate-icon">
            <i className="fas fa-chart-line how-icon"></i>
            <h3>Track & Save</h3>
            <p>
              Track calories, progress, and save your favorite meal plans for reuse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
