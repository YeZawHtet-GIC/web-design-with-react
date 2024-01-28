import React from "react";
import "./Features.css";
import Feature from "./images/dashboard.jpg";
import authorImage from "./images/person_1.jpg";

export default function Features() {
  return (
    <div className="container-fluid container-spacing" id="Features">
      {/* Wrapper Start */}
      <div className="container">
        <div className="row">
          {/* Left Side Text Start */}
          <div className="col-lg-4" data-aos="fade-up" data-aos-duration="800">
            <span className="caption">Digital Services</span>
            <h3 className="heading">Selling Digital Services</h3>
            <p className="mt-3 text-muted lh-lg">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast
            </p>
            <ul className="lh-lg list-unstyled">
              <li className="stick position-relative ps-4">
                There live the blind texts
              </li>
              <li className="stick position-relative ps-4">
                Far far away behind the word
              </li>
            </ul>
            <blockquote
              className="text-black"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <i>
                “Separated they{" "}
                <mark>
                  live in Bookmarksgrove right at the coast of the Semantics
                </mark>
                , a large language ocean. A small river named Duden flows by
                their place and supplies it with the necessary regelialia. ”
              </i>
            </blockquote>
            <div
              className="author d-flex mt-3"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div>
                <img
                  className="author-image"
                  src={authorImage}
                  alt="Author Image"
                />
              </div>
              <div className="author-text">
                <div className="name">James Anderson</div>
                <div className="position text-muted">
                  Facebook, Product Lead
                </div>
              </div>
            </div>
          </div>
          {/* Left Side Text End */}

          {/* Right Side Image Start */}
          <div
            className="col-lg-7 shadow-lg ms-auto"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={Feature} className="img-fluid"></img>
          </div>
          {/* Right Side Image End */}
        </div>
      </div>
      {/* Wrapper End */}
    </div>
  );
}
