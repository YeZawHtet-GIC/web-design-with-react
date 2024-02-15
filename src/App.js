import Header from "./Header/Header";
import "./App.css";
import Footer from "./Footer/Footer";
import AOS from "aos";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

function App() {
  //Aos Animation
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
