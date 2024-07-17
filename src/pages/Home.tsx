import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <h2>Welcome</h2>
      <button className="btn btn-link" onClick={() => navigate('/login')}>
        Login
      </button>
    </div>
  );
};

export default Home;
