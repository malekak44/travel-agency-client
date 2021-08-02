import React from 'react';
import './TestimonialCard.css';
import quote from '../../images/quote.svg';

const ReviewCard = ({ data }) => {
    return (
        <div className='item'>
            <img src={data.image} alt={data.name} />
            <h4>{data.name}</h4>
            <h5>{data.profession}</h5>
            <img className="quote" src={quote} alt="quote" />
            <p>{data.speech}</p>
        </div>
    );
};

export default ReviewCard;