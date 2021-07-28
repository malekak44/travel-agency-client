import React from 'react';
import './Navbar.css';
import brand from '../../images/brand.png';

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <p className="navbar-brand">
                    <img src={brand} alt="brand" />
                    <span className="brand-name">Travel Agency</span>
                </p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <p className="nav-link">Home</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Destinations</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Admin</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Contact</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Login</p>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;