import React from "react";
import AboutImage from "./images/about.svg";
export default function AboutUs() {
  return (
    <div className="container-fluid container-spacing" id="About">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <img src={AboutImage} alt="About Section Image"></img>
          </div>
          <div className="col-lg-4">
            <span className="caption">About</span>
            <h3 className="heading">About Us</h3>
            <p className="text-muted lh-lg">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast Separated they
              <mark style={{ backgroundColor: "#f2f6ff" }}>
                live in Bookmarksgrove right at the coast of the Semantics
              </mark>
              , a large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia.
            </p>
            <ul className="lh-lg list-unstyled">
              <li className="stick position-relative ps-4">There live the blind texts</li>
              <li className="stick position-relative ps-4">Far far away behind the word</li>
              <li className="stick position-relative ps-4">Thier place and supplies</li>
            </ul>
            <div className="row">
                <div className="col-lg-6">
                    <span className="d-block mt-3" style={{ fontSize:'40px' }}>59M</span>
                    <span className="d-block mt-3">MEMBERS</span>
                </div>
                <div className="col-lg-6">
                <span className="d-block mt-3" style={{ fontSize:'40px' }}>14</span>
                    <span className="d-block mt-3">TEAM</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
