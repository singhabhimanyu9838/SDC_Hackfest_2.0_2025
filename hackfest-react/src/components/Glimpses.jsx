import React from "react";

const Glimpses = () => {
  return (
    <section id="glimpses-new">
      <div className="glimpses-new-container">
        <div className="container">
          <div className="section_title">
            <h3
              className="title-dark"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
            >
              Glimpses <span className="text-capitalize">of HackFest</span>
              <br />
              <span className="previous_ed text-capitalize">
                Previous Editions
              </span>
            </h3>
          </div>
        </div>

        <div className="new-scroll-container">
          <div className="new-carousel-primary">
            <img src="/assets/img/glimpses/1.jpg" alt="img1" />
            <img src="/assets/img/glimpses/2.jpg" alt="img2" />
            <img src="/assets/img/glimpses/3.jpg" alt="img3" />
            <img src="/assets/img/glimpses/4.jpg" alt="img4" />
            <img src="/assets/img/glimpses/5.jpg" alt="img5" />
            <img src="/assets/img/glimpses/5.jpg" alt="img6" />
            <img src="/assets/img/glimpses/7.jpg" alt="img7" />
            <img src="/assets/img/glimpses/2.jpg" alt="img8" />
            <img src="/assets/img/glimpses/4.jpg" alt="img9" />
            <img src="/assets/img/glimpses/5.jpg" alt="img10" />
            <img src="/assets/img/glimpses/7.jpg" alt="img11" />
          </div>

          <div className="new-carousel-secondary">
            <img src="/assets/img/glimpses/8.jpg" alt="img8" />
            <img src="/assets/img/glimpses/9.jpg" alt="img9" />
            <img src="/assets/img/glimpses/10.jpg" alt="img10" />
            <img src="/assets/img/glimpses/11.jpg" alt="img11" />
            <img src="/assets/img/glimpses/12.jpg" alt="img12" />
            <img src="/assets/img/glimpses/11.jpg" alt="img13" />
            <img src="/assets/img/glimpses/8.jpg" alt="img14" />
            <img src="/assets/img/glimpses/5.jpg" alt="img15" />
            <img src="/assets/img/glimpses/9.jpg" alt="img16" />
            <img src="/assets/img/glimpses/12.jpg" alt="img17" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glimpses;
