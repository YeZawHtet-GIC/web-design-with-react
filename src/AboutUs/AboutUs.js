import React, { useState, useEffect } from "react";
// Counter by React
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import AboutImage from "../images/about.svg";
import "./AboutUs.css";
export default function AboutUs() {
  // Counter Start
  const [startCount, setStartCount] = useState(0);
  const endCount = 59;
  useEffect(() => {
    setStartCount(1);
  }, []);
  // Counter End
  return (
    // Control Scroll and Count
    <ScrollTrigger
      onEnter={() => setStartCount(true)}
      onExit={() => setStartCount(false)}
    >
      <div className="container-fluid container-spacing" id="About">
        <div className="container">
          <div className="row">
            {/* Left Side of About Image */}
            <div
              className="col-lg-8"
              id="about-image"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={AboutImage} alt="About Section Image"></img>
            </div>
            {/* Left Side of About Image End*/}
            {/* Right Side Text */}
            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="caption">About</span>
              <h3 className="heading">About Us</h3>
              <p className="text-muted lh-lg">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast Separated they
                <mark>
                  live in Bookmarksgrove right at the coast of the Semantics
                </mark>
                , a large language ocean. A small river named Duden flows by
                their place and supplies it with the necessary regelialia.
              </p>
              <ul className="lh-lg list-unstyled">
                <li
                  className="stick position-relative ps-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  There live the blind texts
                </li>
                <li
                  className="stick position-relative ps-4"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  Far far away behind the word
                </li>
                <li
                  className="stick position-relative ps-4"
                  data-aos="fade-up"
                  data-aos-duration="1600"
                >
                  Thier place and supplies
                </li>
              </ul>
              <div className="row" data-aos="fade-in" data-aos-duration="1000">
                <div className="col-lg-6">
                  <span className="d-block mt-3 f-40px-400w">
                    <span>
                      {startCount && (
                        <CountUp
                          start={startCount}
                          end={endCount}
                          duration={5}
                        />
                      )}
                    </span>
                    M
                  </span>
                  <span className="d-block mt-3">MEMBERS</span>
                </div>
                <div className="col-lg-6">
                  <span className="d-block mt-3 f-40px-400w">
                    {startCount && <CountUp start={1} end={14} duration={5} />}
                  </span>
                  <span className="d-block mt-3">TEAM</span>
                </div>
              </div>
            </div>
            {/* Right Side Text End*/}
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}
