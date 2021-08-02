import React from 'react';
import './Book.css';
import credit from '../../images/credit-card.png';
import paypal from '../../images/paypal.png';

const Book = () => {
    return (
        <>
            <div className="page-title">
                <h4>Book</h4>
            </div>
            <form>
                <div className="book-form">
                    <div className="row">
                        <div className="form-group col">
                            <input type="text" className="form-control" autoComplete="off" placeholder="Enter Full Name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <input type="email" className="form-control" autoComplete="off" placeholder="Enter Email Address" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <input type="text" className="form-control" autoComplete="off" placeholder="Enter Service Name" />
                        </div>
                    </div>
                    <p>Pay With</p>
                    <div className="row">
                        <div className="form-group col">
                            <input type="radio" name="pay-method" id="card" />
                            <label htmlFor="card"><img style={{ marginTop: "-3px" }} src={credit} alt="" /> Credit Card</label>
                        </div>
                        <div className="form-group col">
                            <input type="radio" name="pay-method" id="paypal" />
                            <label htmlFor="paypal"><img src={paypal} alt="paypal" /> PayPal</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <input style={{ marginTop: "20px" }} type="text" className="form-control" autoComplete="off" placeholder="Card Number" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <input type="text" className="form-control" autoComplete="off" placeholder="MM/ YY" />
                        </div>
                        <div className="form-group col">
                            <input type="text" className="form-control" autoComplete="off" placeholder="CVC" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <p style={{ paddingTop: "8px" }}>Your service charge will be <span style={{ fontWeight: "bold" }}>$2000</span></p>
                        </div>
                        <div className="form-group col">
                            <input type="submit" className="brand-btn" id="payBtn" value="Pay" />
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Book;