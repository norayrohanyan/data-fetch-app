import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Home from 'pages/Home';
import A from 'pages/A';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path='/authenticated' element={<A />} />
      </Routes>
    </Router>
  );
};

export default App;