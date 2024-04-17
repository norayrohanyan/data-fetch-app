import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, NavigateFunction } from "react-router-dom";
import { logout } from "store/features/authSlice/authSlice";
import { AppDispatch } from "store";
import styles from './Navigation.module.css';

const Navigation: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate: NavigateFunction = useNavigate();
  const dispatch: AppDispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout({}));
    navigate('/');
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles["menu-icon"]} onClick={toggleMenu}>
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={`${styles["nav-menu"]} ${isMenuOpen ? styles["active"] : ""}`}>
          <li>
            <Link to="/authenticated/posts">Posts</Link>
          </li>
          <li>
            <Link to="/authenticated/comments">Comments</Link>
          </li>
          <li>
            <Link to="/authenticated/images">Images</Link>
          </li>
        </ul>
        <button className={styles["logout-button"]} onClick={handleLogout}>
          Log Out
        </button>
      </nav>
    </header>
  );
};

export default Navigation;
