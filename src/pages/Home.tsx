import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Welcome to Dumb data fetch app</h1>
            <div>
                <button onClick={() => navigate('/login')}>Login</button>
                <button onClick={() => navigate('/register')}>Register</button>
            </div>
        </div>
    );
};

export default Home;