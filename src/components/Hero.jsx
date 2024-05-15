import React from "react";
import "../styles/Hero.css";
import heroImage from '../assets/hero-image.jpg'; // Adjust the path as needed

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero__content">
        <p>Find the Best <br />Activity for your <br />Child!</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">For Academies</button>
          <button className="btn btn-secondary">SpArts in Your Home</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;
