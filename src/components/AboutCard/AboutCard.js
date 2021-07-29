import React from 'react';
import './AboutCard.css';

const AboutCard = ({ data }) => {
    return (
        <div className="col-md-3">
            <div className="about-card">
                <img src={data.icon} alt={data.title} />
                <h5>{data.title}</h5>
            </div>
        </div>
    );
};

export default AboutCard;