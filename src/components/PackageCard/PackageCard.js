import React from 'react';
import './PackageCard.css';
import calendarIcon from '../../images/calendar.svg';
import locationIcon from '../../images/location.svg';

const PackageCard = ({ data }) => {
    return (
        <div className="col-md-4">
            <div className="packageCard">
                <img src={data.image} className="img-fluid" alt={data.location} />
                <p><span className="price">${data.price}</span>/Per Person</p>
                <p><img src={calendarIcon} alt="calendar" /> 5 days/6 nights</p>
                <h5 className="text-center"><img src={locationIcon} alt="map" />{data.location}</h5>
            </div>
        </div>
    );
};

export default PackageCard;