import { loginSuccess, loginFailure } from 'store/features/authSlice/authSlice';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { FC, useState, useEffect } from 'react';
import { AppDispatch, RootState } from 'store';
import { mockLogin } from 'api/authAPI';
import styles from './Login.module.css';

const Login: FC = () => {

    const dispatch: AppDispatch = useDispatch();
    const error = useSelector((state: RootState) => state.auth.error);
    const navigate: NavigateFunction = useNavigate();

    const [email, setUserEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!email || !password) {
            dispatch(loginFailure({ error: 'Please enter both email and password' }));
            return;
        }

        try {
            const result = await mockLogin({ email, password });
            if (result) {
                dispatch(loginSuccess({ user: result.user, token: result.token }));
                navigate('/authenticated/posts');
            } else {
                dispatch(loginFailure({ error: 'Invalid email or password' }));
            }
        } catch (e) {
            dispatch(loginFailure({ error: 'An error occurred while logging in' }));
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setUserEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/authenticated/posts');
        }
    }, [navigate]);


    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form} action="post">
                <h2 className={styles.title}>Login</h2>
                <div className={styles.inputContainer}>
                    <input
                        onChange={handleChange}
                        className={styles.input}
                        id='email'
                        value={email}
                        type='text'
                        name='email'
                        placeholder="Email"
                    />
                    <input
                        onChange={handleChange}
                        className={styles.input}
                        id='password'
                        value={password}
                        type='password'
                        name='password'
                        placeholder="Password"
                    />
                    <button type='submit' className={styles.button}>Login</button>
                </div>
                {error && <div className={styles.error}>{error}</div>}
            </form>
        </div>
    );
};

export default Login;