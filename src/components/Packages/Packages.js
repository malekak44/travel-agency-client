import React from 'react';
import './Packages.css';
import eiffel from '../../images/eiffel-tower.jpeg';
import burj from '../../images/burj-al-arab.jpg';
import taipei from '../../images/taipei.jpg';
import PackageCard from '../PackageCard/PackageCard';
const packagesData = [
    {
        location: "Eiffel Power, Paris, France",
        image: eiffel,
        price: 180
    },
    {
        location: "Dubai, United Arab Emirates",
        image: burj,
        price: 280
    },
    {
        location: "Taipei City, Taiwan",
        image: taipei,
        price: 120
    }
]

const Packages = () => {
    return (
        <div className="packages-container">
            <h5 className="text-center">Choose Your Package</h5>
            <h2>Select The Best Package</h2>
            <h2>For Your Travel</h2>
            <div className="container row" style={{ margin: "4% auto" }}>
                {
                    packagesData.map(pd => <PackageCard key={pd.location} data={pd}></PackageCard>)
                }
            </div>
        </div>
    );
};

export default Packages;