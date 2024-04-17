import { FC } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, NavigateFunction } from "react-router-dom";
import { logout } from "store/features/authSlice/authSlice";
import { AppDispatch } from "store";
import styles from './Navigation.module.css';

const Navigation: FC = () => {

    const navigate: NavigateFunction = useNavigate();
    const dispatch: AppDispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout({}));
        navigate('/');
    };

    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <Link to="/authenticated/posts">Posts</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/authenticated/comments">Comments</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/authenticated/images">Images</Link>
                    </li>
                </ul>
            </nav>
            <button onClick={handleLogout}>Log Out</button>
        </header>
    )
};

export default Navigation;