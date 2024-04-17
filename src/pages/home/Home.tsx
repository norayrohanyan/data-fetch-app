import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

const Home: FC = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to Dumb data fetch app</h1>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleLoginClick}>Login</button>
                <button className={styles.button} onClick={handleRegisterClick}>Register</button>
            </div>
        </div>
    );
};

export default Home;
