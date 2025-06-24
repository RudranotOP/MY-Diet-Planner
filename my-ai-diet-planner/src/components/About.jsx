import React from 'react';
import '../styles/About.css';
import healthyImg from '../assets/health.png'; // ✅ Import the image

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">About Nutri Mind</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Nutri Mind is your AI-powered nutrition companion that helps you make smart food choices. Whether you're looking to lose weight, gain muscle, or just eat healthier, our intelligent system creates customized meal plans tailored to your goals.
          </p>
          <p>
            Our mission is to simplify nutrition through technology, making it accessible, sustainable, and effective for everyone. Powered by modern AI and a passion for well-being, Nutri Mind adapts to your lifestyle and evolves with your progress.
          </p>
        </div>
        <div className="about-image">
          <img src={healthyImg} alt="Healthy lifestyle" /> {/* ✅ use imported variable */}
        </div>
      </div>
    </section>
  );
};

export default About;
