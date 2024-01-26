import React, { useState } from "react";
import "./Pricing.css";
import "./Features2.css";
import featureImage from "./images/dashboard.jpg";
export default function Features2() {
  // State to track the active item ID
  const [activeItemId, setActiveItemId] = useState("item1"); // Set initial active item ID

  // Function to handle item change
  const handleItemClick = (itemId) => {
    setActiveItemId(itemId);
  };
  return (
    <div className="container-fluid container-spacing" id="Pricing">
      <div className="container">
        <div className="row carousel slide" id="dashboard" data-bs-ride="true">
          <div
            className="col-lg-7 p-2 shadow-lg"
            data-aos="fade-in"
            data-aos-duration="1000"
          >
            <div className="carousel-inner">
              <div
                className={`carousel-item position-relative ${
                  activeItemId === "item1" ? "active" : "inactive"
                }`}
              >
                {/* Content for item with ID 'item1' */}
                <img
                  src={featureImage}
                  alt="Dashboard Image"
                  className="img-fluid"
                />
                <div className="text-center mb-2">
                  <span className="c-rounded">1/4</span>
                </div>
              </div>
              <div
                className={`carousel-item ${
                  activeItemId === "item2" ? "active" : "inactive"
                }`}
              >
                {/* Content for item with ID 'item2' */}
                <img
                  src={featureImage}
                  alt="Dashboard Image"
                  className="img-fluid"
                />
                <div className="text-center mb-2">
                  <span className="c-rounded">2/4</span>
                </div>
              </div>
              <div
                className={`carousel-item ${
                  activeItemId === "item3" ? "active" : "inactive"
                }`}
              >
                {/* Content for item with ID 'item3' */}
                <img
                  src={featureImage}
                  alt="Dashboard Image"
                  className="img-fluid"
                />
                <div className="text-center mb-2">
                  <span className="c-rounded">3/4</span>
                </div>
              </div>
              <div
                className={`carousel-item ${
                  activeItemId === "item4" ? "active" : "inactive"
                }`}
              >
                {/* Content for item with ID 'item3' */}
                <img
                  src={featureImage}
                  alt="Dashboard Image"
                  className="img-fluid"
                />
                <div className="text-center mb-2">
                  <span className="c-rounded">4/4</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-5 overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <a
              type="button"
              onClick={() => handleItemClick("item1")}
              className={`d-flex m-4 g-3 text-decoration-none text-dark p-2 rounded ${
                activeItemId === "item1" ? "feature-nav-card" : ""
              }`}
            >
              <div className="service-icon1 h-100 rounded p-2">
                <svg
                  className="bi bi-app-indicator"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"
                  ></path>
                  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                </svg>
              </div>
              <div className="service-contents ps-3">
                <h3 className="f-18">Grow Your Business</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>
              </div>
            </a>
            <a
              type="button"
              onClick={() => handleItemClick("item2")}
              className={`d-flex m-4 g-3 text-decoration-none text-dark p-2 rounded ${
                activeItemId === "item2" ? "feature-nav-card" : ""
              }`}
            >
              <div className="service-icon2 h-100 rounded p-2">
                <svg
                  class="bi bi-arrow-repeat"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z"
                  ></path>
                </svg>
              </div>
              <div className="service-contents ps-3">
                <h3 className="f-18">Build Products</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>
              </div>
            </a>
            <a
              type="button"
              onClick={() => handleItemClick("item3")}
              className={`d-flex m-4 g-3 text-decoration-none text-dark p-2 rounded ${
                activeItemId === "item3" ? "feature-nav-card" : ""
              }`}
            >
              <div className="service-icon3 h-100 rounded p-2">
                <svg
                  class="bi bi-briefcase"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"
                  ></path>
                </svg>
              </div>
              <div className="service-contents ps-3">
                <h3 className="f-18">Success Every Day</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>
              </div>
            </a>
            <a
              type="button"
              onClick={() => handleItemClick("item4")}
              className={`d-flex m-4 g-3 text-decoration-none text-dark p-2 rounded ${
                activeItemId === "item4" ? "feature-nav-card" : ""
              }`}
            >
              <div className="service-icon4 h-100 rounded p-2">
                <svg
                  class="bi bi-collection"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.5 13.5h-13A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm-13 1A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"
                  ></path>
                </svg>
              </div>
              <div className="service-contents ps-3">
                <h3 className="f-18">Bring Ideas to Life</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
