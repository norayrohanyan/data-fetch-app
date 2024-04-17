import { FC, useState, useEffect } from 'react';
import { mockLogin } from 'api/authAPI'; 
import { useDispatch, useSelector } from  'react-redux'
import { AppDispatch, RootState } from 'store';
import { loginSuccess, loginFailure } from 'store/features/authSlice/authSlice';
import { useNavigate, NavigateFunction } from 'react-router-dom';
const Login: FC = () => {

    const dispatch: AppDispatch = useDispatch();
    const error = useSelector((state: RootState) => state.auth.error);
    const navigate: NavigateFunction = useNavigate();

    const [email, setUserEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!email || ! password) {
            dispatch(loginFailure({ error: 'Please enter both email and password' }));
            return;
        }

        try {
            const result = await mockLogin({ email, password });
            if (result) {
                dispatch(loginSuccess({ user: result.user, token: result.token }));
                navigate('/authenticated');
            } else {
                dispatch(loginFailure({ error: 'Invalid email or password' }));
            }
        } catch(e) {
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
          navigate('/authenticated', { replace: true });
        }
      }, [navigate]);
    

    return (
        <form onSubmit={handleSubmit} action="post">
            <label htmlFor="email">Email</label>
            <input onChange={handleChange} id='email' value={email} type='text' name='email' />
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} id='password' value={password} type='password' name='password' />
            <button type='submit'>Login</button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </form>
    );
};

export default Login;