import React from 'react';
import Header from '../components/Header/Header';
import Packages from '../components/Packages/Packages';
import Services from '../components/Services/Services';
import WhyUs from '../components/WhyUs/WhyUs';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';

const Home = () => {
    const url = window.location.href;
    if (!url.includes('login')) {
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = "transparent";
    }
    return (
        <div>
            <Header />
            <Packages />
            <Services />
            <WhyUs />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;