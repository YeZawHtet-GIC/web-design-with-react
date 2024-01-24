import React from "react";
import "./Feedback.css";
import authorImage from "./images/person_1.jpg";
import authorImage1 from "./images/person_3.jpg";
export default function Feedback() {
  return (
    <div className="container-fluid container-spacing">
      <div className="container">
        <div className="row carousel slide" id="demo" data-bs-ride="carousel">
          <div className="col-lg-4 txt-sm-small">
            <span className="caption">TESTIMONIALS</span>
            <h3 className="heading">Our Customers Feedback</h3>
            <a
              class="carousel-control-prev"
              data-bs-target="#demo"
              data-bs-slide="prev"
              className="d-inline-block rounded me-3 text-center text-light"
              style={{
                width: "40px",
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
            <a
              class="carousel-control-next"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="next"
              className="d-inline-block rounded text-center text-light"
              style={{
                width: "40px",
                height: "40px",
                lineHeight: "35px",
                fontSize: "24px",
                backgroundColor: "#cccccc",
              }}
            >
              <svg
                class="bi bi-arrow-right"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="col-lg-8 ">
            <div className="carousel-inner">
              {" "}
              <div className="row row-cols-1 row-cols-lg-2">
                <div className="col carousel-item active">
                  <blockquote>
                    “Separated they{" "}
                    <span class="highlight">
                      live in Bookmarksgrove right at the coast of the Semantics
                    </span>
                    , a large language ocean. A small river named Duden flows by
                    their place and supplies it with the necessary regelialia. ”
                  </blockquote>
                  <div className="author d-flex mt-3">
                    <div>
                      <img
                        className="author-image"
                        src={authorImage1}
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
                <div className="col carousel-item active">
                  <blockquote>
                    “Separated they{" "}
                    <span class="highlight">
                      live in Bookmarksgrove right at the coast of the Semantics
                    </span>
                    , a large language ocean. A small river named Duden flows by
                    their place and supplies it with the necessary regelialia. ”
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
