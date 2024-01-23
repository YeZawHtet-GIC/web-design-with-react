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
    <div>
    <nav class="navbar pt-3 navbar-expand-lg navbar-light mb-5">
      <div class="container">
        <a class="navbar-brand" href="#">
          Launch<span class="text-primary">.</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#Features">
                Features
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul
                class="dropdown-menu"
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
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#Pricing">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#About">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a
            href="#"
            className="btn btn-outline-primary px-3"
            style={{ borderRadius: "20px", marginRight: "10px" }}
          >
            Login
          </a>
          <a
            href="#"
            className="btn btn-primary px-3"
            style={{ borderRadius: "20px", marginRight: "10px" }}
          >
            Register
          </a>
        </div>
      </div>
    </nav>
    </div>
  );
}
