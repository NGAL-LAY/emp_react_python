import React, { useState } from 'react';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Positions from './components/Position';
import AuthService from './services/authService';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(AuthService.isAuthenticated());
  const handleLogin = () => setIsAuthenticated(AuthService.isAuthenticated());
  const handleLogout = () => {
    AuthService.logout();
    setIsAuthenticated(false);
  };

  return (
    <>
    <nav>
      {isAuthenticated ? (
        <>
          <Link>Logo</Link> |{' '}
          <Link to="/">Home</Link> |{' '}
          <Link to="/employees">Employees</Link> |{' '}
          <Link to="/departments">Departments</Link> |{' '}
          <Link to="/employees">Reports</Link> |{' '}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </>
      )}
    </nav>

    <Routes>
      {/* Public Routes */}
      {!isAuthenticated ? (
        <>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          {/* Redirect to login if not authenticated */}
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          {/* Protected Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/positions" element={<Positions />} />
          {/* Redirect to home if authenticated */}
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>

    <footer className="bg-light bg-opacity-75 text-center">
    <div className="container">
    <p className='text-warning-emphasis'>&copy; 2025 Your Company Name. All Rights Reserved.</p>
    <p>
      <a href="/privacy" className="text-warning-emphasis me-3">
        Privacy Policy |
      </a>
      
      <a href="/terms" className="text-warning-emphasis ms-3">
        Terms of Service
      </a>
    </p>
  </div>
    </footer>
  </>
  );
};

export default App;
