// src/components/Navbar.jsx

// my name is rudra

import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference on mount
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    if (savedMode) {
      document.body.classList.add('dark-mode');
      setDarkMode(true);
    }
  }, []);

  // Toggle dark mode on click
  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('darkMode', isDark.toString());
  };

  return (
    <header className="navbar">
      <div className="logo">
        <span role="img" aria-label="logo">🥗</span>{' '}
        <strong style={{ color: darkMode ? '#fff' : '#000' }}>Nutri Mind</strong>
      </div>
      <nav className="navbar-right">
        <a href="#">🏠 Home</a>
        <a href="#features">✨ Features</a>
        <a href="#how-it-works">⚙️ How It Works</a>
        <a href="#testimonials">💬 Testimonials</a>
        {/* <a href="bmi.html">BMI Calculator</a> */}
        <a href="dashboard.html">📊 Dashboard</a>
        <a href="#about">ℹ️ About</a>
        <button id="login-btn" className="cta">Login</button>
        <span
          id="dark-mode-toggle"
          onClick={toggleDarkMode}
          style={{ cursor: 'pointer', fontSize: '1.2rem', marginLeft: '1rem' }}
          title="Toggle Dark Mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
