// src/components/Sponsors.jsx
import React from "react";

const Sponsors = () => {
  return (
    <section className="pt100 pb100" id="sponsors">
      <div className="container">
        <div className="section_title">
          <h3
            className="title-dark"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            Our Sponsors
          </h3>
        </div>
        <div className="text-center" style={{ color: "#fff", marginTop: 40 }}>
          <p>Sponsors will be announced soon. Stay tuned!</p>
        </div>

        <div className="text-center" style={{ marginTop: 24 }}>
          <a href="mailto:sdc2021recbanda@gmail.com">
            <button className="cta sponsor_us_btn">
              <span className="hover-underline-animation" style={{ fontSize: 17 }}>
                Sponsor Us
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
