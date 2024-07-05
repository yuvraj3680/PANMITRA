import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Login from './components/User/Login';

const App = () => {
  // Simulate authentication check (replace with your actual logic)
  const isAuthenticated = localStorage.getItem('token') !== null;

  return (
    <Router>
      <Routes>
        {/* Route to login page */}
        <Route path="/login" element={<Login />} />

        {/* Private route for home page */}
        <Route
          path="/*"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
};

export default App;
