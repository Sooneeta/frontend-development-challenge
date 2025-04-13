import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/components/mainlayout.scss";
import { Toaster } from "sonner";

const MainLayout = ({ children }) => {
  return (
    <>
      <Toaster richColors position="top-center" />
      <main className="layout">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;
