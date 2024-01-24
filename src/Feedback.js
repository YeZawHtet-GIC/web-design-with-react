import React from "react";

export default function Feedback() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <span className="caption">TESTIMONIALS</span>
            <h3 className="heading">Our Customers Feedbck</h3>
            <a
              className="d-block text-center text-light"
              style={{
                width: "50px",
                height: "40px",
                lineHeight: "35px",
                fontSize: "24px",
                backgroundColor: "#cccccc",
              }}
            >
              <svg
                className="bi bi-arrow-left"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="col-lg-6">
            <div className="row row-cols-1 row-cols-lg-2">
              <div className="col">
                <blockquote>
                  “Separated they{" "}
                  <span class="highlight">
                    live in Bookmarksgrove right at the coast of the Semantics
                  </span>
                  , a large language ocean. A small river named Duden flows by
                  their place and supplies it with the necessary regelialia. ”
                </blockquote>
              </div>
              <div className="col">
                <blockquote>
                  “Separated they{" "}
                  <span class="highlight">
                    live in Bookmarksgrove right at the coast of the Semantics
                  </span>
                  , a large language ocean. A small river named Duden flows by
                  their place and supplies it with the necessary regelialia. ”
                </blockquote>
              </div>
            </div>
            {/* <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">Bla Bla</div>
              <div className="carousel-item">Bla Bla</div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
