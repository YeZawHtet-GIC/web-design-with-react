
import Features from "./Features";
import Features2 from "./Features2";
import Features3 from "./Features3";
import Header from "./Header";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Pricing2 from "./Pricing2";
import "./App.css";
import Feedback from "./Feedback";
import AboutUs from "./AboutUs";
import AboutUs2 from "./AboutUs2";
import Contact from "./Contact";
import Footer from "./Footer";
import AOS from "aos";

import React, { useEffect } from "react";

function App() {
  //Aos Animation
  useEffect(() => {
    AOS.init();
  }, []);

 
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default App;
