import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({ data }) => {
    return (
        <Link to="/dashboard/book" style={{ textDecoration: "none", color: "#262339" }}>
            <div className="service-card">
                <img src={data.imageURL} alt={data.name} />
                <h4 className="mt-1">{data.name}</h4>
                <h4>${data.cost}</h4>
                <p className="text-secondary">{data.description}</p>
            </div>
        </Link>
    );
};

export default ServiceDetail;