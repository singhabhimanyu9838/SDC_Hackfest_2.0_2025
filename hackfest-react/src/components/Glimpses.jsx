import React, { useEffect } from "react";
import "./Glimpses.css";

const Glimpses = () => {
  useEffect(() => {
    const tracks = document.querySelectorAll(".glimpses-track");

    tracks.forEach((track) => {
      const clone = track.innerHTML; // duplicate all images
      track.innerHTML += clone; // append copy → makes infinite loop
    });
  }, []);

  return (
    <section id="glimpses-new">
      <div className="glimpses-wrapper container">
        <div className="container">
  <div className="row">
    <div className="col-lg-7 col-md-10">
      <div className="section_title">
        <h3
          className="title-dark"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
        >
          Glimpses <span className="text-capitalize">of HackFest</span>
          <br />
          <span className="previous_ed text-capitalize">Previous Editions</span>
        </h3>
      </div>
    </div>
  </div>
</div>


        {/* ROW 1 → moves LEFT */}
        <div className="glimpses-row left">
          <div className="glimpses-track">
            <img src="/assets/img/glimpses/1.jpg" alt="" />
            <img src="/assets/img/glimpses/2.jpg" alt="" />
            <img src="/assets/img/glimpses/3.jpg" alt="" />
            <img src="/assets/img/glimpses/4.jpg" alt="" />
            <img src="/assets/img/glimpses/5.jpg" alt="" />
          </div>
        </div>

        {/* ROW 2 → moves RIGHT */}
        <div className="glimpses-row right">
          <div className="glimpses-track">
            <img src="/assets/img/glimpses/8.jpg" alt="" />
            <img src="/assets/img/glimpses/9.jpg" alt="" />
            <img src="/assets/img/glimpses/10.jpg" alt="" />
            <img src="/assets/img/glimpses/11.jpg" alt="" />
            <img src="/assets/img/glimpses/12.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glimpses;
