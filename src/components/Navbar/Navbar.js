import React from 'react';
import './Navbar.css';
import brand from '../../images/brand.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <p className="navbar-brand">
                        <img src={brand} alt="brand" />
                        <span className="brand-name">Travel Agency</span>
                    </p>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <p className="nav-link">Home</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/destinations" style={{ textDecoration: "none" }}>
                                <p className="nav-link">Destinations</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin" style={{ textDecoration: "none" }}>
                                <p className="nav-link">Admin</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" style={{ textDecoration: "none" }}>
                                <p className="nav-link">Contact</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" style={{ textDecoration: "none" }}>
                                <p className="nav-link">Login</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;