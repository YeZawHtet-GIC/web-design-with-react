import React from "react";
import authorImage from "./images/person_1.jpg";
import authorImage1 from "./images/person_2.jpg";
import authorImage2 from "./images/person_3.jpg";
import "./About2.css";
export default function AboutUs2() {
  return (
    <div
      className="container-fluid container-spacing bg-1"
    >
      <div className="container">
        <div
          className="row text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="f-38">Our News</h2>
          <span className="mb-5 text-muted">
            Far from the countries Vokalia and Consonantia
          </span>
        </div>
        <div className="row row-cols-1 row-cols-lg-3">
          <div className="col" data-aos="fade-up" data-aos-duration="1200">
            <div className="border floating-card bg-white px-2">
              <div className="p-4">
                <div className="author d-flex mt-3">
                  <div>
                    <img
                      className="author-image"
                      src={authorImage}
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-text">
                    <div className="name fw-bolder">Posted by James</div>
                    <div className="position text-muted">June 14, 2020</div>
                  </div>
                </div>

                <span className="mt-4 d-block text-muted">
                  Digital Services, 4 mins read
                </span>
                <a
                  href="#"
                  className="text-decoration-none about-a-hover text-dark d-block mt-4 f-28"
                >
                  Far far away behind the word mountains far from the countries
                </a>
                <a
                  href="#"
                  className="read-more-arrow d-block mt-4 bg-1 arrow-size"
                >
                  <svg
                    class="bi bi-arrow-right"
                    width="2em"
                    height="2em"
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
            </div>
          </div>
          <div className="col" data-aos="fade-up" data-aos-duration="1400">
            <div className="border floating-card bg-white px-2">
              <div className="p-4">
                <div className="author d-flex mt-3">
                  <div>
                    <img
                      className="author-image"
                      src={authorImage}
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-text">
                    <div className="name fw-bolder">Posted by Khan</div>
                    <div className="position text-muted">June 14, 2020</div>
                  </div>
                </div>

                <span className="mt-4 d-block text-muted">
                  Digital Services, 4 mins read
                </span>
                <a
                  href="#"
                  className="text-decoration-none about-a-hover text-dark d-block mt-4 f-28"
                >
                  Far far away behind the word mountains far from the countries
                </a>
                <a className="read-more-arrow d-block mt-4 arrow-size bg-1">
                  <svg
                    class="bi bi-arrow-right"
                    width="2em"
                    height="2em"
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
            </div>
          </div>
          <div className="col" data-aos="fade-up" data-aos-duration="1600">
            <div className="border floating-card bg-white px-2">
              <div className="p-4">
                <div className="author d-flex mt-3">
                  <div>
                    <img
                      className="author-image"
                      src={authorImage}
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-text">
                    <div className="name fw-bolder">Posted by Rob</div>
                    <div className="position text-muted">June 14, 2020</div>
                  </div>
                </div>

                <span className="mt-4 d-block text-muted">
                  Digital Services, 4 mins read
                </span>
                <a
                  href="#"
                  className="text-decoration-none about-a-hover text-dark d-block mt-4 f-28"
                >
                  Far far away behind the word mountains far from the countries
                </a>
                <a className="read-more-arrow d-block mt-4 bg-1 arrow-size">
                  <svg
                    class="bi bi-arrow-right"
                    width="2em"
                    height="2em"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
