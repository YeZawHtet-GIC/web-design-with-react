import React from "react";
import HeroImage from "./images/img_hero.svg";
import "./Hero.css";
export default function Hero() {
  return (
    <div className="container-fluid hero-section pb-5 pt-8per">
      <div className="container">
        <div className="row row-cols-lg-2 row-cols-1">
          {/* Hero Right For Image */}
          <div
            className="col order-lg-2"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img src={HeroImage} alt="Hero Image"></img>
          </div>
          {/* Hero Right For Image */}
          {/* Hero Left For Text */}
          <div className="col" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="hero-heading">
              Promote Your <br /> Products by <br /> Colorlib
            </h1>
            <p style={{ color:'#939393' }}>
              Another cool free html css template by{" "}
              <a
                href="#"
                target="_blank"
                class="highlight text-decoration-none"
              >
                Colorlib
              </a>{" "}
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast
            </p>
            <div className="py-3 nav-sm-group">
              <a href="#" className="btn btn-primary cmn-btn">
                See Features
              </a>
              <a href="#" className="btn btn-outline-primary cmn-btn">
                Pricing
              </a>
            </div>
          </div>
          {/* Hero Left For Text End*/}
        </div>
      </div>
    </div>
  );
}
