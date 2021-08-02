import React from 'react';
import '../AdminNav/AdminNav.css';
import logo from '../../images/logo.svg';
import cart from '../../images/cart.svg';
import list from '../../images/list.svg';
import review from '../../images/review.svg';
import { Link } from 'react-router-dom';

const UserNav = () => {
    let navbar = document.getElementById("verNav");
    if (navbar) {
        let links = navbar.getElementsByClassName("nav-item");
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener("click", function () {
                let current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    }
    return (
        <div className="vertical-nav" id="sidebar">
            <div className="pt-4 px-3 mb-4">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                    <div className="media d-flex align-items-center"><img src={logo} alt="logo" width="35" className="mr-3" />
                        <div className="media-body">
                            <h3 className="m-0">Travel Agency</h3>
                        </div>
                    </div>
                </Link>
            </div>

            <ul className="nav flex-column mb-0 user-nav" id="verNav">
                <li className="nav-item active">
                    <Link to="/dashboard/book" style={{ textDecoration: "none" }}>
                        <p className="link">
                            <img src={cart} alt="book" /> <span>Book</span>
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/dashboard/list" style={{ textDecoration: "none" }}>
                        <p className="link">
                            <img src={list} alt="list" /> <span>Booking list</span>
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/dashboard/review" style={{ textDecoration: "none" }}>
                        <p className="link">
                            <img src={review} alt="review" /> <span>Review</span>
                        </p>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default UserNav;