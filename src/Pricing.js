import React from "react";
export default function Pricing() {
  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#f7f8f9" }}
    >
      <div className="container">
        <div className="row text-center mb-5">
          <h2>Pricing</h2>
          <p className="text-muted mb-3">
            Price for everyone. Choose your plan now!
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row">
              <div
                className="col-lg-4 p-5 border "
                style={{ backgroundColor: "#ffffff", borderRadius: "40px" }}
              >
                <div className="price d-flex flex-column text-center">
                  <span style={{ fontSize: "30px" }}>Free</span>
                  <span style={{ fontSize: "40px" }}>
                    <sup style={{ fontSize: "20px" }}>$</sup>0
                  </span>
                </div>
                <ul>
                  <li>There live the blind texts</li>
                  <li>Far far away behind the word</li>
                  <li>Far from the countries Vokalia and Consonantia</li>
                </ul>
                <div className="text-center">
                  <a className="cmn-btn btn btn-outline-primary my-4">
                    Get Started
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 p-5 border"
                style={{ backgroundColor: "#ffffff", borderRadius: "40px" }}
              >
                <div className="price d-flex flex-column text-center">
                  <span style={{ fontSize: "30px" }}>Standard</span>
                  <span style={{ fontSize: "40px" }}>
                    <sup style={{ fontSize: "20px" }}>$</sup>19.99
                  </span>
                </div>
                <ul className="lh-4">
                  <li>There live the blind texts</li>
                  <li>Far far away behind the word</li>
                  <li>Far from the countries Vokalia and Consonantia</li>
                </ul>
                <div className="text-center">
                  <a className="cmn-btn btn btn-primary my-4">
                    Get Started
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 p-5 border"
                style={{ backgroundColor: "#ffffff", borderRadius: "40px" }}
              >
                <div className="price d-flex flex-column text-center">
                  <span style={{ fontSize: "30px" }}>Premium</span>
                  <span style={{ fontSize: "40px" }}>
                    <sup style={{ fontSize: "20px" }}>$</sup>79.99
                  </span>
                </div>
                <ul>
                  <li>There live the blind texts</li>
                  <li>Far far away behind the word</li>
                  <li>Far from the countries Vokalia and Consonantia</li>
                </ul>
                <div className="text-center">
                  <a className="cmn-btn btn btn-outline-primary my-4">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
