// src/components/FloatingIcons.jsx
import React from 'react';
import '../styles/FloatingIcons.css';

const icons = [
  '🍎', '🥦', '🍳', '🥗', '🍇', '🍞', '🥕', '🍓', '🍖', '🥜'
];

const FloatingIcons = () => {
  return (
    <div className="floating-icons-container">
      {icons.map((icon, idx) => (
        <span key={idx} className="floating-icon" style={{ '--i': idx + 1 }}>
          {icon}
        </span>
      ))}
    </div>
  );
};

export default FloatingIcons;
