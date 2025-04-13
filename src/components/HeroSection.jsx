import React from "react";
import HeroSectionImg from "../assets/background-image.svg";
import "../styles/herosection.scss";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      <div>
        <h1>Get instant cash flow with invoice factoring</h1>
        <p>
          Why wait? Get same day funding and a faster way to access cash flow.
        </p>
        <button>Get Started</button>
        <section className="circle-container">
          <div className="circle-active"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </section>
      </div>
      <figure>
        <img src={HeroSectionImg} />
      </figure>
    </div>
  );
};

export default HeroSection;
