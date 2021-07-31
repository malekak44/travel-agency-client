import React from 'react';
import './WhyUs.css';
import guide from '../../images/guide.svg';
import trust from '../../images/trust.svg';
import experience from '../../images/experience.svg';
import traveller from '../../images/traveller.svg';
import AboutCard from '../AboutCard/AboutCard';

const aboutData = [
    {
        id: 1,
        icon: guide,
        title: "2000+ our worldwide guide"
    }, {
        id: 2,
        icon: trust,
        title: "100% trusted travel agency"
    }, {
        id: 3,
        icon: experience,
        title: "10+ year of travel experience"
    }, {
        id: 4,
        icon: traveller,
        title: "90% of our traveller happy"
    }
]

const WhyUs = () => {
    return (
        <div className="about-container my-5">
            <h5 className="text-center">Why Travel Agency</h5>
            <h2>Why You Will Travel With</h2>
            <h2>Travel Agency</h2>
            <div style={{ margin: "auto" }} className="container row mt-5">
                {
                    aboutData.map(about => <AboutCard key={about.id} data={about}></AboutCard>)
                }
            </div>
        </div>
    );
};

export default WhyUs;