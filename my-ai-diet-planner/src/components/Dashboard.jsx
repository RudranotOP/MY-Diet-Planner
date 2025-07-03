import React from 'react';
import '../styles/Dashboard.css';
import { Link } from 'react-router-dom';
import BMIChart from './BMIChart'; // ✅ Import your Chart.js BMI Chart

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Nutri Mind</h2>
        </div>
        <nav className="sidebar-nav">
          <Link to="/">🏠 Home</Link>
          <Link to="/dashboard">📈 Dashboard</Link>
          <Link to="/weekly-plan">🗓️ Weekly Plan</Link>
          <Link to="/meal-plans">🍽️ Meal Plans</Link>
          <Link to="/bmi">⚖️ BMI Calculator</Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Your Health Dashboard</h1>
          <div className="dashboard-date">{new Date().toDateString()}</div>
        </header>

        {/* Stat Cards */}
        <section className="stats-cards">
          <div className="card calories">
            <div className="card-header">
              ⚡ Calories <span className="tag">Today</span>
            </div>
            <h2>50 / 2000 kcal</h2>
            <div className="progress-bar">
              <div className="progress" style={{ width: '3%' }}></div>
            </div>
            <p>3% of daily goal</p>
          </div>

          <div className="card protein">
            <div className="card-header">
              💧 Protein
            </div>
            <h2>30 / 150 g</h2>
            <div className="progress-bar">
              <div className="progress" style={{ width: '20%' }}></div>
            </div>
            <p>20% of daily goal</p>
          </div>

          <div className="card water">
            <div className="card-header">
              🚰 Water <span className="tag">Today</span>
            </div>
            <h2>2 / 8</h2>
            <div className="progress-bar">
              <div className="progress" style={{ width: '25%' }}></div>
            </div>
            <p>25% of daily goal</p>
          </div>

          <div className="card bmi">
            <div className="card-header">
              ❤️ BMI <span className="tag update">Update</span>
            </div>
            <h2>22.5 <span className="status normal">Normal</span></h2>
            <p>Great job! Maintain your healthy lifestyle.</p>
          </div>
        </section>

        {/* Chart + Quick Actions */}
        <section className="charts-actions">
          <div className="chart-card">
            <h3>BMI Progress</h3>
            {/* ✅ Actual Chart here */}
            <BMIChart />
          </div>
          <div className="quick-actions">
            <h3>Quick Actions</h3>
            <div className="actions-grid">
              <button>📅 New Plan</button>
              <button>🗓️ Weekly Plan</button>
              <button>⚖️ BMI Check</button>
              <button>🍽️ Log Meal</button>
              <button>💧 Log Water</button>
              <button>💬 Feedback</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
