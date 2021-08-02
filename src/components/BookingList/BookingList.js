import React from 'react';
import './BookingList.css';
import accomodation from '../../images/accomodation.png';
import carHire from '../../images/car-hire.png';

const BookingList = () => {
    const bookings = [
        {
            icon: accomodation,
            name: "Accommodation",
            price: 360,
            description: 'Travel agency takes pride in giving the customers a choice of their specific accommodation needs, no matter where – regionally and internationally.'
        },
        {
            icon: carHire,
            name: "Car Hire",
            price: 120,
            description: "Travel Agency is an agent for a number of internationally recognized car rental companies. A mutual relationship exists."
        },
    ]
    return (
        <div>
            <div className="page-title">
                <h4>Booking List</h4>
            </div>
            <div className="bookings">
                {
                    bookings.map(bk => {
                        return (
                            <div className="single-booking">
                                <img src={bk.icon} alt={bk.name} />
                                <span className="status">Pending</span>
                                <h5>{bk.name}</h5>
                                <p>{bk.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default BookingList;