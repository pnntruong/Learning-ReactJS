import './NameCard.css'
import React from "react";
import Info from './Info';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';

const NameCard = () => {
  return (
    <div className="container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
};

export default NameCard;
