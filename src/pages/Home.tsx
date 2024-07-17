import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className='home-content'>
            <div>
                <h2>Welcome to the Home Page</h2>
                
            </div>
        </div>
    );
};

export default Home;
