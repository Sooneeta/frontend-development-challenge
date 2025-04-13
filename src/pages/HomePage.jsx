import React from "react";
import HeroSection from "../components/HeroSection";
import { paymentCollections } from "../constants/constants";
import EarthIcon from "../assets/Earth.svg";
import "../styles/homepage.scss";
import TaskManager from "../components/TaskManager";
import ContactForm from "../components/ContactForm";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <section className="outsource-payment">
        <div className="heading">
          <h2>Outsource payment collection</h2>
          <p>
            Faster and flexible access to cash flow from one or all your
            invoices.
          </p>
        </div>
        <div className="payment-collection-container">
          {paymentCollections?.map((item, index) => (
            <div key={index} className="payment-collection-item">
              <img src={EarthIcon} />
              <h5>{item.heading}</h5>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <TaskManager />
      <ContactForm />
    </div>
  );
};

export default HomePage;
