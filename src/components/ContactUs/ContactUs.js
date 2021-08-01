import React from 'react';
import './ContactUs.css';
import arrival from '../../images/arrival.svg';
import customerService from '../../images/customer-service.svg';
import thumbsup from '../../images/thumbsup.svg';
import instagram from '../../images/instagram.svg';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import whatsapp from '../../images/whatsapp.svg';
import clock from '../../images/clock.svg';

const ContactUs = () => {
    return (
        <div className="contact-wrapper">
            <div className="contact-cards">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="contact-card">
                                <div className="contact-icon">
                                    <img src={arrival} alt="arrival" />
                                </div>
                                <div className="contact-info">
                                    <h5>Address</h5>
                                    <p>971-949 8th Ave 949 New York, NY</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="contact-card">
                                <div className="contact-icon">
                                    <img src={customerService} alt="customer-service" />
                                </div>
                                <div className="contact-info">
                                    <h5>Email & Phone</h5>
                                    <p>(123) 456 7890
                                        john@yahoo.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="contact-card">
                                <div className="contact-icon">
                                    <img src={thumbsup} alt="thumbsup" />
                                </div>
                                <div className="contact-info">
                                    <h5>Social Media</h5>
                                    <ul className="contact-icons">
                                        <li><img src={instagram} alt="instagram" /></li>
                                        <li><img src={facebook} alt="facebook" /></li>
                                        <li><img src={twitter} alt="twitter" /></li>
                                        <li><img src={whatsapp} alt="whatsapp" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="contact-inputs">
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <div className="contact-details">
                                <h5 className="contact-d-head">Get In Touch</h5>
                                <p>Suspendisse dolor risus, congue ac diam id, viverra facilisis dolor. Cras nec purus sagittis, varius tortor at, maximus erat. Sed at tellus id tellus lobortis dictum. Mauris dignissim, turpis vitae ullamcorper fermentum, sapien arcu aliquam arcu, in viverra quam est ac ex. Cras sed lectus eu.
                                </p>
                                <ul className="office-clock">
                                    <li>
                                        <div className="clock-icon">
                                            <img src={clock} alt="clock" />
                                        </div>
                                        <div className="clock-info">
                                            <h5>Open Hours</h5>
                                            <p>Sat - Thu At <br /> 10.00AM to 10.00PM</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="clock-icon">
                                            <img src={clock} alt="clock" />
                                        </div>
                                        <div className="clock-info">
                                            <h5>Close Hours</h5>
                                            <p>Friday Office Close</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-form">
                                <form>
                                    <h5 className="contact-d-head">Contact Us</h5>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Your Name" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input style={{ paddingRight: '9px' }} type="text" placeholder="Your Subject" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="email" placeholder="Your Email" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input style={{ paddingRight: '9px' }} type="text" placeholder="Your Phone" />
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea cols="55" rows="5" placeholder="Write Message"></textarea>
                                        </div>
                                        <div className="col-lg-12">
                                            <input type="submit" value="Submit" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;