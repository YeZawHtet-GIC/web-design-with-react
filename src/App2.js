import Features from "./Features/Features";
import Features2 from "./Features/Features2";
import Features3 from "./Features/Features3";
import Hero from "./Hero/Hero";
import Pricing from "./Pricing/Pricing";
import Pricing2 from "./Pricing/Pricing2";
import "./App.css";
import Feedback from "./Feedback/Feedback";
import AboutUs from "./AboutUs/AboutUs";
import AboutUs2 from "./AboutUs/AboutUs2";
import Contact from "./Contact/Contact";
import AOS from "aos";
import React, { useEffect } from "react";

function App2() {
  //Aos Animation
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Hero />
      <Features />
      <Features2 />
      <Features3 />
      <Pricing />
      <Pricing2 />
      <Feedback />
      <AboutUs />
      <AboutUs2 />
      <Contact />
    </>
  );
}

export default App2;
