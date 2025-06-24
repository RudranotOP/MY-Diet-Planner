import React from 'react';
import '../styles/Dashboard.css';
import { Link } from 'react-router-dom'; // ✅ Import Link from React Router

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Nutri Mind</h2>
        </div>
        <nav className="sidebar-nav">
          <Link to="/">🏠 Home</Link>               {/* ✅ Home button added */}
          <a href="#overview">📈 Overview</a>
          <a href="#meal-plans">🍽️ Meal Plans</a>
          <a href="#progress">📊 Progress</a>
          <a href="#settings">⚙️ Settings</a>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header>
          <h1>Your Health Dashboard</h1>
        </header>

        <section className="stats-cards">
          <div className="card">
            <h3>Calories Today</h3>
            <p>1,850 kcal</p>
          </div>
          <div className="card">
            <h3>Meals Planned</h3>
            <p>3 meals</p>
          </div>
          <div className="card">
            <h3>Water Intake</h3>
            <p>2.5 L</p>
          </div>
        </section>

        <section className="charts-section">
          <div className="chart-card">
            <h3>Weekly Calorie Intake</h3>
            <p>Chart goes here</p>
          </div>
          <div className="chart-card">
            <h3>Weight Progress</h3>
            <p>Chart goes here</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
