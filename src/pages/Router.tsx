import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from 'pages/Home';
// import MainPage from 'pages/MainPage';
// import Posts from 'components/layout/posts/Posts';
// import Comments from 'components/layout/comments/Comments';
// import Images from 'components/layout/images/Images';
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