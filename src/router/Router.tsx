import { Route, Routes } from 'react-router-dom';
import Register from '../pages/register/Register';
import ProtectedRoutes from './ProtectedRoute';
import Login from '../pages/login/Login';
import Home from 'pages/home/Home';
import { FC } from 'react';

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/authenticated/*" element={<ProtectedRoutes />} />
    </Routes>
  );
};

export default AppRouter;