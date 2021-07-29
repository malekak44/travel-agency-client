import React from 'react';
import './ServiceDetail.css';

const ServiceDetail = ({ data }) => {
    return (
        <div className="col-md-4">
            <div className="service-card">
                <img src={data.icon} alt={data.name} />
                <h4 className="mt-1">{data.name}</h4>
                <h4>${data.price}</h4>
                <p className="text-secondary">{data.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;