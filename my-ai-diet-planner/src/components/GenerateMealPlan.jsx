// src/components/GenerateMealPlan.jsx
import React from 'react';
import '../styles/GenerateMealPlan.css';
import { Link } from 'react-router-dom';

const mealPlans = [
  {
    category: "Special Purpose Diets",
    icon: "🎯",
    plans: [
      { name: "Keto", icon: "🥓", quote: "Burn fat with low carbs." },
      { name: "Paleo", icon: "🍖", quote: "Eat like your ancestors." },
      { name: "Mediterranean", icon: "🍅", quote: "Heart-healthy and delicious." },
      { name: "Mental Wellness", icon: "🧠", quote: "Feed your mind and mood." }
    ]
  },
  {
    category: "Allergy-Friendly Plans",
    icon: "⚠️",
    plans: [
      { name: "Gluten-Free", icon: "🌾🚫", quote: "Safe for your gut." },
      { name: "Lactose-Free", icon: "🥛❌", quote: "No dairy, no worries." },
      { name: "Nut-Free", icon: "🥜🚫", quote: "Allergy-safe meals." }
    ]
  },
  {
    category: "Lifestyle/Ethical Diets",
    icon: "🌿",
    plans: [
      { name: "Vegetarian", icon: "🥗", quote: "Plants on your plate." },
      { name: "Vegan", icon: "🌱", quote: "Powered by plants." },
      { name: "Non-Vegetarian", icon: "🍗", quote: "Protein-packed variety." },
      { name: "Flexitarian", icon: "🍽️", quote: "Best of both worlds." },
      { name: "Pescatarian", icon: "🐟", quote: "Go lean with seafood." }
    ]
  },
  {
    category: "Health Condition-Based",
    icon: "💊",
    plans: [
      { name: "Diabetic-Friendly", icon: "🍎", quote: "Balance your blood sugar." },
      { name: "Heart-Healthy", icon: "❤️", quote: "Eat for your heart." },
      { name: "PCOS/Thyroid-Friendly", icon: "🧬", quote: "Support your hormones." },
      { name: "Renal Diet", icon: "🧂🚫", quote: "Kidney-conscious meals." }
    ]
  },
  {
    category: "Goal-Oriented Plans",
    icon: "🏆",
    plans: [
      { name: "Weight Loss", icon: "⚖️⬇️", quote: "Shed pounds smartly." },
      { name: "Weight Gain", icon: "⚖️⬆️", quote: "Fuel your growth." },
      { name: "Muscle Building", icon: "💪", quote: "Build lean strength." },
      { name: "Athletic Performance", icon: "🏃", quote: "Energize and recover." }
    ]
  },
  {
    category: "Gym-Oriented",
    icon: "🏋️",
    plans: [
      { name: "Gym Veg", icon: "🥦💪", quote: "Plant power for your reps." },
      { name: "Gym Non-Veg", icon: "🍗💪", quote: "Protein-packed performance." }
    ]
  }
];

const GenerateMealPlan = () => {
  return (
    <div className="generate-page">
      <Link to="/" className="home-btn">🏠 Home</Link>

      <h1 className="generate-title">Choose Your Meal Plan</h1>

      <div className="meal-plan-container">
        {mealPlans.map((category) => (
          <div key={category.category} className="category-section">
            <h2 className="category-title">{category.icon} {category.category}</h2>
            <div className="card-grid">
              {category.plans.map((plan) => (
                <div key={plan.name} className="plan-card">
                  <div className="plan-icon">{plan.icon}</div>
                  <h3>{plan.name}</h3>
                  <p className="quote">“{plan.quote}”</p>
                  <button className="select-btn">Select Plan</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenerateMealPlan;
