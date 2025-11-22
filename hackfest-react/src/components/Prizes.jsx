// src/components/Prizes.jsx
import React from "react";

const Prizes = () => {
  return (
    <section id="prizes" className="pb100 pt100">
      <div className="container">
        <div className="section_title">
          <h3
            className="title-dark"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            PRIZES
          </h3>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/* 1st */}
          <div
            className="prize-card"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="main">
              <div className="service">
                <div className="service-logo first-logo">
                  <img src="/assets/img/first.png" alt="1st" />
                </div>
                <h4 className="prize-heading">First Prize</h4>
                <img
                  src="/assets/img/glimpses/sdcT-shirt.jpg"
                  alt="SDC T-shirt"
                  height="200"
                />
                <p>T-shirt</p>
              </div>
            </div>
          </div>

          {/* 2nd */}
          <div
            className="prize-card"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="main">
              <div className="service">
                <div className="service-logo second-logo">
                  <img src="/assets/img/second.png" alt="2nd" />
                </div>
                <h4 className="prize-heading">Second Prize</h4>
                <p>Bottle</p>
              </div>
            </div>
          </div>

          {/* 3rd */}
          <div
            className="prize-card"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="main">
              <div className="service">
                <div className="service-logo third-logo">
                  <img src="/assets/img/third.png" alt="3rd" />
                </div>
                <h4 className="prize-heading">Third Prize</h4>
                <p>Cap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
