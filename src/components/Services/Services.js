import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import accomodation from '../../images/accomodation.png';
import carHire from '../../images/car-hire.png';
import visas from '../../images/visas.png';

const servicesData = [
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
        description: "Travel Agency is an agent for a number of internationally recognized car rental companies. A mutual relationship exists with Europcar, Budget and Avis."
    },
    {
        icon: visas,
        name: "Visas",
        price: 250,
        description: "Travel Agency has a department which offers professional and timeous visa services. The department also advises clients regarding visa requirements."
    }
]

const Services = () => {
    return (
        <div className="services-container">
            <h5 className="text-center">Checkout Our Services</h5>
            <h2>We Have All The Services</h2>
            <h2>That You Need</h2>
            <div style={{ margin: "auto" }} className="container my-5 row">
                {
                    servicesData.map(service => <ServiceDetail key={service.name} data={service}></ServiceDetail>)
                }
            </div>
            <button style={{ display: "block", margin: "auto" }} className="btn brand-btn">Explore More</button>
        </div>
    );
};

export default Services;