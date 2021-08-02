import React from 'react';
import Header from '../components/Header/Header';
import Packages from '../components/Packages/Packages';
import Services from '../components/Services/Services';
import WhyUs from '../components/WhyUs/WhyUs';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';

const Home = () => {
    const url = window.location.href;
    if (!url.includes('login') || !url.includes('dashboard')) {
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = "white";
    }
    return (
        <div>
            <Header />
            <Packages />
            <Services />
            <WhyUs />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;