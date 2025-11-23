import React from "react";
import "./Sponsers.css"
const Sponsors = () => {
  const sponsors = [
    "/assets/img/sponsors/spon1.jpg",
    "/assets/img/sponsors/spon2.jpg",
    "/assets/img/sponsors/spon3.jpg",
    "/assets/img/sponsors/spon4.jpg",
    "/assets/img/sponsors/spon5.jpg",
    "/assets/img/sponsors/spon6.jpg",
  ];

  return (
    <section className="pt100 pb100" id="sponsors">
      <div className="container">
        <div className="section_title">
          <h3
            className="title-dark"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Our Sponsors
          </h3>
        </div>

        <div className="sponsor-grid">
          {sponsors.map((src, i) => (
            <div className="sponsor-card" key={i}>
              <img src={src} alt={`Sponsor ${i + 1}`} />
            </div>
          ))}
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
