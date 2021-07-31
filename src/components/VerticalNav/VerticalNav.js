import React from 'react';
import './VerticalNav.css';
import logo from '../../images/logo.svg';
import grid from '../../images/grid.svg';
import add from '../../images/add.svg';
import addUser from '../../images/add-user.svg';
import order from '../../images/order.svg';
import { Link } from 'react-router-dom';

const VerticalNav = () => {
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

            <ul className="nav flex-column mb-0" id="verNav">
                <li className="nav-item active">
                    <Link to="/admin/manage" style={{ textDecoration: "none" }}>
                        <p className="link manage">
                            <img src={grid} alt="manage" /> <span>Manage Services</span>
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/add" style={{ textDecoration: "none" }}>
                        <p className="link add">
                            <img src={add} alt="add" /> <span>Add Service</span>
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/orders" style={{ textDecoration: "none" }}>
                        <p className="link">
                            <img src={order} alt="order" /> <span>Order List</span>
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/make" style={{ textDecoration: "none" }}>
                        <p className="link">
                            <img src={addUser} alt="admin" /> <span>Make Admin</span>
                        </p>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default VerticalNav;