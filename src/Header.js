import React, { useState } from "react";

export default function Header() {
  const [isSubdropdownOpen, setSubdropdownOpen] = useState(false);
  const handleMouseEnter = () => {
    setSubdropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setSubdropdownOpen(false);
  };
  return (
    <div
      className="position-fixed w-100 pt-2" 
      style={{ backgroundColor: "#fff", zIndex:'1000' }}  data-aos="fade-in" data-aos-duration="1000"
    >
      <nav className="navbar pt-2 navbar-expand-lg navbar-light">
        <div className="container">
          <a
            className="navbar-brand"
            style={{ fontSize: "24px", fontWeight: "700" }}
            href="#"
          >
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
                <a className="nav-link active" aria-current="page" href="#Features">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul
                  className={`dropdown-menu ${isSubdropdownOpen ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Testimonials
                    </a>
                  </li>
                  <li
                    className="nav-item dropdown"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      className="nav-link"
                      href="#"
                      role="button"
                      aria-expanded="false"
                    >
                      Menu Two
                    </a>
                    <ul
                      className={`dropdown-menu ${
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
                <a className="nav-link text-muted" aria-current="page" href="#Features">
                  Features
                </a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link text-muted" aria-current="page" href="#Pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link text-muted" aria-current="page" href="#About">
                  About
                </a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link text-muted" aria-current="page" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
            <div>
              <a
                href="#"
                className="btn btn-outline-primary px-4"
                style={{
                  borderRadius: "20px",
                  marginRight: "10px",
                  padding: "5px 22px",
                  fontSize: "14px",
                }}
              >
                Sign In
              </a>
              <a
                href="#"
                className="btn btn-primary px-3"
                style={{
                  borderRadius: "20px",
                  marginRight: "10px",
                  padding: "5px 22px",
                  fontSize: "14px",
                }}
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
