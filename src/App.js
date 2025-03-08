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
          <Link to="/">Home</Link> |{' '}
          <Link to="/positions">Positions</Link> |{' '}
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
  </>
  );
};

export default App;
