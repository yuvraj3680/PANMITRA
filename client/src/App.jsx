import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Login from './components/User/Login';
// import NotFound from './components/NotFound';

// PrivateRoute Component
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public route for login page */}
        <Route path="/login" element={<Login />} />

        {/* Private routes for authenticated users */}
        <Route
          path="/*"
          element={
             <PrivateRoute>
              <Home />
             </PrivateRoute>
          }
        />

        {/* Redirect root to login page */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Catch all route for 404 not found */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
