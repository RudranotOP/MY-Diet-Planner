// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FloatingIcons from './components/FloatingIcons';
import Dashboard from './components/Dashboard'; // Make sure this exists

function App() {
  return (
    <Routes>
      {/* Home Page Route with Navbar */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <Testimonials />
            <About />
            <FloatingIcons />
          </>
        }
      />

      {/* Dashboard Route without Navbar */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
