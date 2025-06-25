// src/App.jsx
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FloatingIcons from './components/FloatingIcons';
import Dashboard from './components/Dashboard';
import GenerateMealPlan from './components/GenerateMealPlan';
import AuthModal from './components/AuthModal';

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleLoginClick = () => setShowAuthModal(true);
  const handleCloseModal = () => setShowAuthModal(false);

  return (
    <Routes>
      {/* Home Page with Navbar */}
      <Route
        path="/"
        element={
          <>
            <Navbar onLoginClick={handleLoginClick} />
            <Hero />
            <Features />
            <HowItWorks />
            <Testimonials />
            <About />
            <FloatingIcons />
            {showAuthModal && <AuthModal onClose={handleCloseModal} />}
          </>
        }
      />

      {/* Dashboard Page (No Navbar) */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Generate Meal Plan Page (No Navbar) */}
      <Route path="/generate-meal-plan" element={<GenerateMealPlan />} />
    </Routes>
  );
}

export default App;
