import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <header className="header">
        <h1 className="logo">User Weather App</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
          </ul>
        </nav>
      </header>
      
      <main className="content">
        <Outlet />
      </main>
      
      <footer className="footer">
        <p>2024 WeatherApp. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
