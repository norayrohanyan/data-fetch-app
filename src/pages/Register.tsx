import React, { useState } from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { mockRegister } from 'api/authAPI';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from 'store';
import { registerFailure, registerSuccess } from 'store/features/registrationSlice/RegistrationSlice';

const Register: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const error = useSelector((state: RootState) => state.register.error);
  const dispatch: AppDispatch = useDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || !email) {     
        dispatch(registerFailure({error: 'Please enter both email and password'}));
      return;
    }

    try {
      const isSuccess = await mockRegister({ email, password });
      if (isSuccess) {
        dispatch(registerSuccess({ email, password }));
        navigate('/login');
      } else {
        dispatch(registerFailure({error: 'Email already exists'})); 
      }
    } catch (error) {
        dispatch(registerFailure({error: 'An error occurred while registering'})); 
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </div>
  );
};

export default Register;
