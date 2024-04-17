import { FC, useEffect } from 'react';
import { Route, useNavigate, NavigateFunction } from 'react-router-dom';
import Comments from 'components/layout/comments/Comments';
import Images from 'components/layout/images/Images';
import MainPage from 'pages/MainPage';
import Posts from 'components/layout/posts/Posts';

const ProtectedRoutes: FC = () => {
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <MainPage>
      <Route path="posts" element={<Posts />} />
      <Route path="comments" element={<Comments />} />
      <Route path="images" element={<Images />} />
    </MainPage>
  );
};

export default ProtectedRoutes;