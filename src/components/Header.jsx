import React, { useState } from "react";
import { navLinks } from "../constants/constants";
import Logo from "../assets/logo.svg";
import "../styles/components/mainlayout.scss";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <header>
      <section className="logo-section">
        <img src={Logo} />
      </section>
      <button onClick={toggleSidebar} className="menu-button">
        <Menu className="hamburger-menu" />
      </button>
      <nav className="navlink">
        {navLinks?.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </nav>
      <section className="login-section">
        <span>Login</span>
        <button>Request a demo</button>
      </section>
      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />
    </header>
  );
};

export default Header;
