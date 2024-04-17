import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Home from 'pages/home/Home';
import ProtectedRoutes from './ProtectedRoute';

const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/authenticated/*" element={<ProtectedRoutes />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;