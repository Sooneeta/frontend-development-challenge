import React from "react";
import { navLinks } from "../constants/constants";
import Logo from "../assets/logo.svg";
import "../styles/mainlayout.scss";

const Header = () => {
  return (
    <header>
      <section className="logo-section">
        <img src={Logo} />
      </section>
      <nav className="navlink">
        {navLinks?.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </nav>
      <section className="login-section">
        <span>Login</span>
        <button>Request a demo</button>
      </section>
    </header>
  );
};

export default Header;
