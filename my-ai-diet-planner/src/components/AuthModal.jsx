// src/components/AuthModal.jsx
import React, { useState } from 'react';
import '../styles/AuthModal.css';

const AuthModal = ({ onClose }) => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => setIsRegister(prev => !prev);

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal-card">
        <button className="close-btn" onClick={onClose}>✖</button>

        <div className="auth-tabs">
          <button
            className={!isRegister ? 'active' : ''}
            onClick={() => setIsRegister(false)}
          >
            Login
          </button>
          <button
            className={isRegister ? 'active' : ''}
            onClick={() => setIsRegister(true)}
          >
            Register
          </button>
        </div>

        <form className="auth-form">
          {isRegister && (
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
          )}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="you@example.com" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter Password" required />
          </div>

          <button type="submit" className="submit-btn">
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>

        <p className="toggle-text" onClick={toggleForm}>
          {isRegister
            ? 'Already have an account? Login instead'
            : 'New here? Register now'}
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
