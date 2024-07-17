import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer: React.FC = () => {
    return (
        <footer className="footer bg-light text-center text-lg-start" style={{ padding: '0.5rem', marginTop: 'auto' }}>
            <div className="container">
                <div className="text-center" style={{ padding: '0.5rem' }}>
                    &copy; 2024 MyApp. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
