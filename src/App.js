import React from 'react';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Packages from './components/Packages/Packages';
import Reviews from './components/Reviews/Reviews';
import Services from './components/Services/Services';

const App = () => {
  return (
    <div>
      <Header />
      <Packages />
      <Services />
      <AboutUs />
      <Reviews />
    </div>
  );
};

export default App;