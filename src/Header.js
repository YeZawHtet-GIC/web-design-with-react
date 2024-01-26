import React, { useState } from "react";
import "./Header.css";
export default function Header() {
  const [isSubdropdownOpen, setSubdropdownOpen] = useState(false);
  const handleMouseEnter = () => {
    setSubdropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setSubdropdownOpen(false);
  };
  return (
    // Header Navigation Start
    <div
      className="position-fixed w-100 pt-2 bz-1000"
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      <nav className="navbar pt-2 navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand f-24w" href="#">
            Launch<span className="text-primary">.</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ms-3">
                <a
                  className="nav-link nv-center active"
                  aria-current="page"
                  href="#Features"
                >
                  Home
                </a>
              </li>
              <li className="nav-item dropdown ms-3">
                <a
                  className="nav-link nv-center dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul
                  className={`dropdown-menu dropend ${
                    isSubdropdownOpen ? "show" : ""
                  }`}
                  aria-labelledby="navbarDropend"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Testimonials
                    </a>
                  </li>
                  <li
                    className="nav-item dropdown ms-2"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      className="nav-link p4-16"
                      href="#"
                      role="button"
                      aria-expanded="false"
                    >
                      Menu Two
                      <i
                        className="fa fa-chevron-right f-10 ml-10"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <ul
                      className={`dropdown-menu sub-margin ${
                        isSubdropdownOpen ? "show" : ""
                      }`}
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Testimonials
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Menu Two
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Menu Three
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Menu Three
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item ms-3">
                <a
                  className="nav-link nv-center text-muted"
                  aria-current="page"
                  href="#Features"
                >
                  Features
                </a>
              </li>
              <li className="nav-item ms-3">
                <a
                  className="nav-link nv-center text-muted"
                  aria-current="page"
                  href="#Pricing"
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item ms-3">
                <a
                  className="nav-link nv-center text-muted"
                  aria-current="page"
                  href="#About"
                >
                  About
                </a>
              </li>
              <li className="nav-item ms-3">
                <a
                  className="nav-link nv-center text-muted"
                  aria-current="page"
                  href="#Contact"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="nav-sm-group">
              <a href="#" className="btn btn-outline-primary nav-btn">
                Sign In
              </a>
              <a href="#" className="btn btn-primary nav-btn">
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
