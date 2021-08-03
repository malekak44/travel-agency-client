import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:4000/services';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="services-container">
            <h5 className="text-center">Checkout Our Services</h5>
            <h2>We Have All The Services</h2>
            <h2>That You Need</h2>
            <div className="service-card-container">
                {
                    services.map(sv => <ServiceDetail key={sv._id} data={sv}></ServiceDetail>)
                }
            </div>
        </div>
    );
};

export default Services;