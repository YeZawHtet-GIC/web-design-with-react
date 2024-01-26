import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="container-fluid container-spacing2 bg-2" id="Footer">
      <div className="container" data-aos="fade-in" data-aos-duration="1000">
        <div className="row">
          <div className="col-lg-4">
            <div className="aboutLaunch">
              <h3>
                About Launch<span className="text-primary">.</span>{" "}
              </h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="f-Connect lh-lg">
              <h3 className="mb-4">Connect</h3>
              <ul className="list-unstyled d-flex">
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    <span className="icon-instagram">
                      <i class="fa-brands fa-instagram"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    <span className="icon-twitter">
                      <i class="fa-brands fa-twitter"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    <span className="icon-facebook">
                      <i class="fa-brands fa-facebook"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    <span className="icon-linkedin">
                      <i class="fa-brands fa-linkedin"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    <span className="icon-pinterest">
                      <i class="fa-brands fa-pinterest"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    <span className="icon-dribbble">
                      <i class="fa-brands fa-dribbble"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 ms-auto">
            <div className="f-Projects lh-lg">
              <h3>Projects</h3>
              <ul className="list-unstyled float-left links">
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    La Lega Stadium
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    France Building
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    22 New Homes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    Manage Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    Sports Hall
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="f-service lh-lg">
              <h3>Services</h3>
              <ul className="list-unstyled float-left links">
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    Architect
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    Interior Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    Landscape Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    Consultancy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="f-Contact lh-lg">
              <h3>Contact</h3>
              <address className="text-muted">
                43 Raymouth Rd. Baltemoer, London 3910
              </address>
              <ul className="list-unstyled links mb-4">
                <li>
                  <a
                    href="tel://11234567890"
                    className="text-decoration-none text-muted"
                  >
                    +1(123)-456-7890
                  </a>
                </li>
                <li>
                  <a
                    href="tel://11234567890"
                    className="text-decoration-none text-muted"
                  >
                    +1(123)-456-7890
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@mydomain.com"
                    className="text-decoration-none text-muted"
                  >
                    info@mydomain.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p>
              Copyright ©
              <script>document.write(new Date().getFullYear());</script>2024 All
              rights reserved | This template is made with{" "}
              <i className="fa-solid fa-heart text-danger"></i> by{" "}
              <a
                href="https://colorlib.com"
                className="text-decoration-none"
                target="_blank"
              >
                Colorlib
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
