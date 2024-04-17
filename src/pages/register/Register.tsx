import { registerFailure, registerSuccess } from 'store/features/registrationSlice/RegistrationSlice';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from 'store';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import { mockRegister } from 'api/authAPI';
import React, { useState } from 'react';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const error = useSelector((state: RootState) => state.register.error);
  const dispatch: AppDispatch = useDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || !email) {
      dispatch(registerFailure({ error: 'Please enter both email and password' }));
      return;
    }

    try {
      const isSuccess = await mockRegister({ email, password });
      if (isSuccess) {
        dispatch(registerSuccess({ email, password }));
        navigate('/login');
      } else {
        dispatch(registerFailure({ error: 'Email already exists' }));
      }
    } catch (error) {
      dispatch(registerFailure({ error: 'An error occurred while registering' }));
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form} action="post">
        <h2 className={styles.title}>Register</h2>
        <div className={styles.inputContainer}>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            placeholder="Email"
          />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            placeholder="Password"
          />
          <button type="submit" className={styles.button}>Register</button>
        </div>
        {error && <div className={styles.error}>{error}</div>}
      </form>
    </div>
  );
};

export default Register;
