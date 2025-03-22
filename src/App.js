import React, { useState } from 'react';
import { Route, Routes, Navigate, Link, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Positions from './components/Position';
import Employees from './components/Employee/Employee';
import EmployeeForm from './components/Employee/EmployeeForm';
import AuthService from './services/authService';
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(AuthService.isAuthenticated());
  const handleLogin = () => setIsAuthenticated(AuthService.isAuthenticated());
  const handleLogout = () => {
    AuthService.logout();
    setIsAuthenticated(false);
  };
  // get by current route like /positions,/departments
  const location = useLocation();
  // allowed paths
  const allowedPaths = ['/', '/employees', '/departments', 'reports'];
  const userName = "Aung Zaw";

  return (
    <>
    {/* header */}
    {allowedPaths.includes(location.pathname) &&<nav className='bg-light bg-opacity-75 footer_height rounded-top-1 d-flex align-items-center'>
        {isAuthenticated ? (
          <>
            <img
              className="card-img-top rounded nav_width"
              alt="Card image"
            />
            <div className='link_width'>
            <Link className='ms-5 me-5 text-decoration-none' to="/">Home</Link>
            <Link className='ms-5 me-5 text-decoration-none' to="/employees">Employees</Link>
            <Link className='ms-5 me-5 text-decoration-none' to="/departments">Departments</Link> 
            <Link className='ms-5 me-5 text-decoration-none' to="/employees">Reports</Link> 
            </div>
            <div className='btn_width'>
            <label className='me-2'>Hello, {userName}</label>
            <button className='form-control-sm bg-primary text-white border-0' onClick={handleLogout}>Logout</button>
            </div>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
          </>
        )}
      </nav>}

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
            <Route path="/employees" element={<Employees />} />
            <Route path="/newemployee" element={<EmployeeForm />} />
            <Route path="/positions" element={<Positions />} />
            {/* Redirect to home if authenticated */}
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>

      {/* footer */}
      {allowedPaths.includes(location.pathname) &&<footer className="bg-light bg-opacity-75 text-center footer_height rounded-bottom-1">
        <p className='text-warning-emphasis'>&copy; 2025 SAS Company. All Rights Reserved.</p>
        <p>
          <a href="/privacy" className="text-warning-emphasis me-3">
            Privacy Policy
          </a>
          <label className='text-warning-emphasis'>|</label>
          <a href="/terms" className="text-warning-emphasis ms-3">
            Terms of Service
          </a>
        </p>
      </footer>}
    </>
  );
};

export default App;
