import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="container-fluid container-spacing" id="Contact">
      {/* Wrapper Start */}
      <div className="container">
        {/* Header Text Start */}
        <div
          className="row text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="f-38">Get In Touch</h2>
          <span className="mb-5 text-muted">
            Far from the countries Vokalia and Consonantia
          </span>
        </div>
        {/* Header Text End */}
        <div className="row">
          {/* Contact Form Start */}
          <div className="col-lg-7" data-aos="fade-up" data-aos-duration="1200">
            <form className="row gap-3">
              <div className="col-lg-12">
                <label for="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="email"
                  className="form-control border-remove"
                  name="firstName"
                />
              </div>
              <div className="col-lg-12">
                <label for="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control border-remove"
                  name="lastName"
                />
              </div>
              <div className="col-lg-12">
                <label for="emailAddress" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  rows="3"
                  name="emailAddress"
                  className="form-control border-remove"
                />
              </div>
              <div className="col-lg-12">
                <label for="Message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control border-remove"
                  rows="5"
                  name="message"
                ></textarea>
              </div>
              <div class="col-lg-12">
                <button type="submit" class="btn btn-primary cmn-btn">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
          {/* Contact Form End */}
          {/* Contact Info Start */}
          <div
            className="col-lg-4 ms-auto"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            <h3 className="h5 mb-4 text-black">Contact Info</h3>
            <address className="text-black d-flex">
              <span className="mt-1 me-2">
                <i class="fa-solid fa-location-dot"></i>
              </span>
              <span>43 Raymouth Rd. Baltemoer, London 3910</span>
            </address>
            <ul className="list-unstyled ul-links mb-4">
              <li className="mb-2">
                <a
                  href="tel://11234567890"
                  className="d-flex text-decoration-none text-black"
                >
                  <span className="mt-1 me-2">
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  <span>+1(123)-456-7890</span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="tel://11234567890"
                  className="d-flex text-decoration-none text-black"
                >
                  <span className="mt-1 me-2">
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  <span>+1(123)-456-7890</span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="mailto:info@mydomain.com"
                  className="d-flex text-decoration-none text-black"
                >
                  <span className="mt-1 me-2">
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                  <span>info@mydomain.com</span>
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  target="_blank"
                  className="d-flex text-decoration-none text-black"
                >
                  <span className="mt-1 me-2">
                    <i class="fa-solid fa-globe"></i>
                  </span>
                  <span>https://Colorlib.com/</span>
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info End */}
        </div>
      </div>
      {/* Wrapper End */}
    </div>
  );
}
