// src/components/Navbar.jsx

//my name is rudra


import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <span role="img" aria-label="logo">🥗</span> Nutri Mind
      </div>
      <nav className="navbar-right">
        <a href="#">🏠 Home</a>
        <a href="#features">✨ Features</a>
        <a href="#how-it-works">⚙️ How It Works</a>
        <a href="#testimonials">💬 Testimonials</a>
        <a href="bmi.html">BMI Calculator</a>
        <a href="dashboard.html">📊 Dashboard</a>
        <a href="#about">ℹ️ About</a>
        <button id="login-btn" className="cta">Login</button>
        <span id="dark-mode-toggle">🌙</span>
      </nav>
    </header>
  );
};

export default Navbar;
