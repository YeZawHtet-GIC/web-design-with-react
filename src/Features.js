import React from "react";
import "./Features.css";
import Feature from "./images/dashboard.jpg";
import authorImage from "./images/person_1.jpg";

export default function Features() {
  return (
    <div className="container-fluid" id="Features">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <span className="caption">Digital Services</span>
            <h3 className="heading">Selling Digital Services</h3>
            <p className="mt-3 text-muted lh-lg">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast
            </p>
            <ul className="lh-lg">
              <li>There live the blind texts</li>
              <li>Far far away behind the word</li>
            </ul>
            <blockquote style={{ color: "black" }}>
              <i>
                “Separated they{" "}
                <mark style={{ backgroundColor: "lightblue" }}>
                  live in Bookmarksgrove right at the coast of the Semantics
                </mark>
                , a large language ocean. A small river named Duden flows by
                their place and supplies it with the necessary regelialia. ”
              </i>
            </blockquote>
            <div className="author d-flex mt-3">
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
          <div className="col-lg-7">
            <img src={Feature} className="img-fluid"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
