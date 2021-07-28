import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import headerbg from '../../images/headerbg.jpg';

const Header = () => {
    return (
        <div className="header">
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 left-banner">
                        <h2 className="brand-header">Take only memories</h2>
                        <h2 className="brand-header">Leave only footprints</h2>
                        <p className="text-secondary">Online travelling agency just for you. You can book the best hotels, residences or private houses. You can get discount as earlier as you book. You will find the best pleasure of the nature. Even you can book tickets from anywhere in the world. Without making a delay, book your tickets.</p>
                        <button className="btn brand-btn">Book Now</button>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={headerbg} alt="headerbg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;