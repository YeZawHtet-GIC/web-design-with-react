import React from "react";
import HeroImage from "./images/img_hero.svg";
import "./Hero.css";
export default function Hero() {
  return (
    <div className="container-fluid hero-section pb-5">
      <div className="container">
        <div className="row">
          {/* Hero Left For Text */}
          <div className="col">
            <h1 className="hero-heading">
              Promote Your <br /> Products by <br /> Colorlib
            </h1>
            <p>
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
            <div className="py-3">
              <a
                href="#"
                className="btn btn-primary cmn-btn"
                style={{ borderRadius: "20px", marginRight: "10px" }}
              >
                See Features
              </a>
              <a
                href="#"
                className="btn btn-outline-primary cmn-btn"
                style={{ borderRadius: "20px", marginRight: "10px" }}
              >
                Pricing
              </a>
            </div>
          </div>
          {/* Hero Left For Text End*/}
          {/* Hero Right For Image */}
          <div className="col">
            <img src={HeroImage}></img>
          </div>
          {/* Hero Right For Image */}
        </div>
      </div>
    </div>
  );
}
