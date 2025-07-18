// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Load dark mode
    const savedMode = localStorage.getItem('darkMode') === 'true';
    if (savedMode) {
      document.body.classList.add('dark-mode');
      setDarkMode(true);
    }

    // Load user login state
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (token && user) {
      setIsLoggedIn(true);
      setUserName(user.name); // 👈 get name
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('darkMode', isDark.toString());
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <header className="navbar">
      <div className="logo">
        <span role="img" aria-label="logo">🥗</span>{' '}
        <strong style={{ color: darkMode ? '#fff' : '#000' }}>Nutri Mind</strong>
      </div>

      <nav className="navbar-right">
        <Link to="/">🏠 Home</Link>
        <a href="#features">✨ Features</a>
        <a href="#how-it-works">⚙️ How It Works</a>
        <a href="#testimonials">💬 Testimonials</a>
        <Link to="/dashboard">📊 Dashboard</Link>
        <a href="#about">ℹ️ About</a>

        {!isLoggedIn ? (
          <button id="login-btn" className="cta" onClick={() => setShowAuthModal(true)}>Login</button>
        ) : (
          <>
            <span className="username" style={{ marginRight: '1rem', fontWeight: 'bold' }}>
              👤 {userName}
            </span>
            <button className="cta" onClick={handleLogout}>Logout</button>
          </>
        )}

        <span
          id="dark-mode-toggle"
          onClick={toggleDarkMode}
          style={{ cursor: 'pointer', fontSize: '1.2rem', marginLeft: '1rem' }}
          title="Toggle Dark Mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </span>
      </nav>

      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onLoginSuccess={() => {
            const user = JSON.parse(localStorage.getItem('user'));
            setIsLoggedIn(true);
            setUserName(user?.name || '');
            setShowAuthModal(false);
          }}
        />
      )}
    </header>
  );
};

export default Navbar;
