// import './App.css';
// import { Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Home from './pages/Home';

// function App() {
//   return (
//     <Routes>
//       <Route path='/' element={<Login />}/>
//       <Route path='/Home' element={<Home />}/>
//     </Routes>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Positions from './components/Position';

const AuthService = {
  login: (username, password) => {
    if (username === 'admin' && password === 'root') {
      const token = 'mock-jwt-token';
      localStorage.setItem('token', token);
      return true;
    }
    return false;
  },
  logout: () => {
    localStorage.removeItem('token');
  },
  isAuthenticated: () => !!localStorage.getItem('token'),
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(AuthService.isAuthenticated());

  const handleLogin = (username, password) => {
    if (AuthService.login(username, password)) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    AuthService.logout();
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{' '}
        {isAuthenticated ? (
          <>
            <Link to="/positions">Positions</Link> | <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
          </>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/positions"
          element={
            isAuthenticated ? <Positions /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
