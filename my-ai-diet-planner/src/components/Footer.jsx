// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">🥗 Nutri Mind</h3>
        <p className="footer-slogan">Eat Smart. Live Better.</p>
        
        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <p className="copyright">© {new Date().getFullYear()} Nutri Mind. All rights reserved.</p>
      </div>

      <button className="scroll-to-top" onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i>
      </button>
    </footer>
  );
};

export default Footer;
