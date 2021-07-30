import React from 'react';
import Header from '../components/Header/Header';
import Packages from '../components/Packages/Packages';
import Services from '../components/Services/Services';
import AboutUs from '../components/AboutUs/AboutUs';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Packages />
            <Services />
            <AboutUs />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;