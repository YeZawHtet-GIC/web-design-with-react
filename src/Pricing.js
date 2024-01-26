import React from "react";
export default function Pricing() {
  return (
    <div
      className="container-fluid container-spacing"
      style={{ backgroundColor: "#f7f8f9" }}
    >
      {/* Wrapper Start */}
      <div className="container">
        <div
          className="row text-center mb-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2>Pricing</h2>
          <p className="text-muted mb-3">
            Price for everyone. Choose your plan now!
          </p>
        </div>
        <div
          className="row justify-content-center"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          <div className="col-lg-10">
            <div className="row">
              {/* Pricing Card 1 */}
              <div className="col-lg-4 mb-4">
                <div
                  className="p-5 border bf-br40"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="price d-flex flex-column text-center">
                    <span className="f-30">Free</span>
                    <span className="f-40 text-c1">
                      <sup className="f-20">$</sup>0
                    </span>
                  </div>
                  <ul className="lh-lg list-unstyled">
                    <li className="stick position-relative ps-4">
                      There live the blind texts
                    </li>
                    <li className="stick position-relative ps-4">
                      Far far away behind the word
                    </li>
                    <li className="stick position-relative ps-4">
                      Far from the countries Vokalia and Consonantia
                    </li>
                  </ul>
                  <div className="text-center">
                    <a className="cmn-btn btn btn-outline-primary my-4">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              {/* Pricing Card 2 */}
              <div className="col-lg-4 mb-4">
                <div
                  className="p-5 border shadow-lg bf-br40"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="price d-flex flex-column text-center">
                    <span className="f-30">Standard</span>
                    <span className="f-40 text-c1">
                      <sup className="f-20">$</sup>19.99
                    </span>
                  </div>
                  <ul className="lh-lg list-unstyled">
                    <li className="stick position-relative ps-4">
                      There live the blind texts
                    </li>
                    <li className="stick position-relative ps-4">
                      Far far away behind the word
                    </li>
                    <li className="stick position-relative ps-4">
                      Far from the countries Vokalia and Consonantia
                    </li>
                  </ul>
                  <div className="text-center">
                    <a className="cmn-btn btn btn-primary my-4">Get Started</a>
                  </div>
                </div>
              </div>
              {/* Pricing Card 3 */}
              <div className="col-lg-4 mb-4">
                <div
                  className="p-5 border bf-br40"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <div className="price d-flex flex-column text-center">
                    <span className="f-30">Premium</span>
                    <span className="f-40 text-c1">
                      <sup className="f-20">$</sup>79.99
                    </span>
                  </div>
                  <ul className="list-unstyled lh-lg">
                    <li className="stick position-relative ps-4">
                      There live the blind texts
                    </li>
                    <li className="stick position-relative ps-4">
                      Far far away behind the word
                    </li>
                    <li className="stick position-relative ps-4">
                      Far from the countries Vokalia and Consonantia
                    </li>
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
      {/* Wrapper End */}
    </div>
  );
}
