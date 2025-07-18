// src/components/AuthModal.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AuthModal.css';

const AuthModal = ({ onClose, onLoginSuccess }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const toggleForm = () => {
    setFormData({ name: '', email: '', password: '' });
    setError('');
    setIsRegister(prev => !prev);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const url = isRegister
        ? 'http://localhost:3000/api/users/register'
        : 'http://localhost:3000/api/users/login';

      const payload = isRegister
        ? formData
        : { email: formData.email, password: formData.password };

      const res = await axios.post(url, payload);

      if (!isRegister) {
        const { token, user } = res.data;

        // Save token & user in localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        // Notify Navbar
        if (onLoginSuccess) onLoginSuccess();
      }

      alert(`${isRegister ? 'Registered' : 'Logged in'} successfully!`);
      onClose(); // Close modal
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal-card">
        <button className="close-btn" onClick={onClose}>✖</button>

        <div className="auth-tabs">
          <button className={!isRegister ? 'active' : ''} onClick={() => setIsRegister(false)}>Login</button>
          <button className={isRegister ? 'active' : ''} onClick={() => setIsRegister(true)}>Register</button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {isRegister && (
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} required />
            </div>
          )}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={formData.password} onChange={handleChange} required />
          </div>

          <button type="submit" className="submit-btn">
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>

        {error && <p className="error-text">{error}</p>}

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
