import React from 'react';
import './Footer.css';
import footerLogo from '../../images/footerLogo.svg';
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import twitter from '../../images/twitter.svg';
import dribble from '../../images/dribble.svg';
import telephone from '../../images/telephone.svg';
import mailSend from '../../images/mail-send.svg';
import locationPin from '../../images/location-pin.svg';
import visa from '../../images/visa.png';
import mastercard from '../../images/mastercard.png';
import skrill from '../../images/skrill.png';
import stripe from '../../images/stripe.png';
import discover from '../../images/discover.png';

const Footer = () => {
    return (
        <div className="footer-area mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="footer-info">
                            <div className="footer-logo navbar-brand">
                                <img src={footerLogo} alt="logo" />
                                <span className="brand-name">Travel Agency</span>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid maxime aut ut voluptate
                                dolorum nisi ducimus ratione</p>
                            <div className="footer-social-icons">
                                <h5>Follow Us:</h5>
                                <ul>
                                    <li><p><img src={facebook} alt="facbook" /></p></li>
                                    <li><p><img src={instagram} alt="instagram" /></p></li>
                                    <li><p><img src={twitter} alt="twitter" /></p></li>
                                    <li><p><img src={dribble} alt="dribble" /></p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-7">
                                <div className="footer-links">
                                    <h5 className="widget-title">Contact us</h5>

                                    <div className="contact-box">
                                        <span><img className="phone" src={telephone} alt="telephone" /></span>
                                        <div>
                                            <p>+01852-1265122</p>
                                            <p>+01852-1265122</p>
                                        </div>
                                    </div>
                                    <div className="contact-box">
                                        <span><img src={mailSend} alt="mail-send" /></span>
                                        <div>
                                            <p>info@travelagency.com</p>
                                            <p>support@travelagency.com</p>
                                        </div>
                                    </div>
                                    <div className="contact-box">
                                        <span><img src={locationPin} alt="location-pin" /></span>
                                        <div>
                                            <p>2752 Willison Street <br />
                                                Eagan, United State</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-5">
                                <div className="footer-links">
                                    <h5 className="widget-title">support</h5>
                                    <div className="category-list">
                                        <ul>
                                            <li><p>Contact us</p></li>
                                            <li><p>About us</p></li>
                                            <li><p>Services</p></li>
                                            <li><p>our Blogs</p></li>
                                            <li><p>terms and conditions</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="footer-links payment-links">
                                    <h5 className="widget-title">We Accepts:</h5>
                                    <div className="payment-cards">
                                        <img src={visa} alt="visa" className="img-fluid" />
                                        <img src={mastercard} alt="card" className="img-fluid" />
                                        <img src={skrill} alt="skrill" className="img-fluid" />
                                        <img src={stripe} alt="stripe" className="img-fluid" />
                                        <img src={discover} alt="discover" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyrigth-area">
                            <p>Copyright 2021 | All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Footer;