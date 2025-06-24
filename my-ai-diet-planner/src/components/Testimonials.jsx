// src/components/Testimonials.jsx
import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2 className="section-title">What Our Users Say</h2>
      <div className="testimonial-pyramid">
        <div className="testimonial-row top-row">
          <div className="testimonial-card">
            <p>"Nutri Mind has transformed how I eat! The meal plans are spot on and I feel healthier every day."</p>
            <h4>- Aditi Sharma</h4>
          </div>
        </div>
        <div className="testimonial-row bottom-row">
          <div className="testimonial-card">
            <p>"As someone with dietary restrictions, I love how personalized the plans are. Highly recommend!"</p>
            <h4>- Rahul Verma</h4>
          </div>
          <div className="testimonial-card">
            <p>"The AI suggestions are surprisingly accurate and tasty. It made sticking to my fitness goals easy!"</p>
            <h4>- Neha Kapoor</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
