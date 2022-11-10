import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./Main.css";

const Main = () => {
  return (
    <div className='wrapper'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
