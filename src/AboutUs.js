import React from "react";
import AboutImage from "./images/about.svg";
export default function AboutUs() {
  return (
    <div className="container-fluid" id="About">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <img src={AboutImage} alt="About Section Image"></img>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
}
