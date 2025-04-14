import React from "react";
import { navLinks } from "../constants/constants";
import "../styles/components/mainlayout.scss";
import { X } from "lucide-react";

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
      <div className="overlay" onClick={closeSidebar}></div>
      <div className="sidebar-content">
        <button className="sidebar-close" onClick={closeSidebar}>
          <X />
        </button>
        <nav className="sidebar-nav">
          {navLinks?.map((link, index) => (
            <span key={index} onClick={closeSidebar}>
              {link}
              <hr />
            </span>
          ))}
        </nav>
        <section className="login">
          <span>Login</span>
          <button>Request a demo</button>
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;
