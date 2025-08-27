// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="app">
      <header className="header">
        <h1>LUD Issue Tracker</h1>
        <nav>
          <Link to="/">View Issues</Link>
          <Link to="/new">New Issue</Link>
        </nav>
      </header>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;