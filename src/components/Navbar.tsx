import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MyApp</Link>
                <div className="row justify-content-end">
                <div className= 'col' > 
                <Link className="navbar-brand" to="/login">Login</Link>
                <Link className="navbar-brand" to="/register">Register</Link>
                </div>
                </div>
        
            
            </div>
        </nav>
    );
};

export default Navbar;
