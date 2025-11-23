import React from "react";
import "./Sponsers.css";
import { FaLinkedin } from "react-icons/fa";

const Sponsors = () => {
  const row1 = [
    "/assets/img/sponsors/spon2.jpg",
    "/assets/img/sponsors/spon3.jpg",
    "/assets/img/sponsors/spon4.jpg",
  ];

  const row2 = [
    "/assets/img/sponsors/spon7.png",
    "/assets/img/sponsors/spon6.jpg",
  ];

  // ⭐ NEW Alumni Sponsors (Dummy)
  const alumniSponsors = [
    { name: "Abhinay Yadav", role: "Alumni Sponsor", img: "/assets/img/sponsors/abhinav.png", linkedin: "https://www.linkedin.com/in/abhinay01/" },
    { name: "Shekhar Mishra", role: "Alumni Sponsor", img: "/assets/img/sponsors/shekhar.jpg", linkedin: "https://www.linkedin.com/in/shekharmishraa/" },
    { name: "Ayush Gupta", role: "Alumni Sponsor", img: "/assets/img/sponsors/ayush.jpg", linkedin: "https://www.linkedin.com/in/ayush-gupta-5a8058227/" },
    { name: "Arpan Bhadoria", role: "Alumni Sponsor", img: "/assets/img/sponsors/arpan.jpg", linkedin: "https://www.linkedin.com/in/arpan-singh-bhadauria-271b55207/" },
    { name: "Akansha Pal", role: "Alumni Sponsor", img: "/assets/img/sponsors/akansha.jpg", linkedin: "https://www.linkedin.com/in/akanksha-pal-0380a7227/" },
    
    { name: "Himanshu sahu", role: "Alumni Sponsor", img: "/assets/img/sponsors/himanshu.jpg", linkedin: "https://www.linkedin.com/in/himanshu-sahu75/overlay/photo" },
    { name: "Piyush sahu", role: "Alumni Sponsor", img: "/assets/img/sponsors/piyush.png", linkedin: "https://www.linkedin.com/in/piyush-sahu-546382227/" },
    
   
  ];

  return (
    <section className="pt100 pb100" id="sponsors">
      <div className="container">

        <div className="section_title">
          <h3 className="title-dark" data-aos="fade-right" data-aos-duration="1000">
            Our Sponsors
          </h3>
        </div>

        {/* ROW 1 — 3 sponsors */}
        <div className="sponsor-row row-3">
          {row1.map((src, i) => (
            <div className="sponsor-card" key={i}>
              <img src={src} alt={`Sponsor ${i + 1}`} />
            </div>
          ))}
        </div>

        {/* ROW 2 — 2 sponsors */}
        <div className="sponsor-row row-2">
          {row2.map((src, i) => (
            <div className="sponsor-card" key={i}>
              <img src={src} alt={`Sponsor ${i + 4}`} />
            </div>
          ))}
        </div>

        {/* ⭐ ALUMNI SPONSORS */}
       {/* ⭐ ALUMNI SPONSORS TITLE */}
<div className="section_title" style={{ marginTop: 60 }}>
  <h3 className="title-dark" data-aos="fade-right">
    Alumni Sponsors
  </h3>
</div>

{/* ⭐ Alumni Row 1 → 4 members */}
<div className="alumni-grid">
  {alumniSponsors.slice(0, 4).map((a, i) => (
    <div className="alumni-card" key={i}>
      <img src={a.img} alt={a.name} className="alumni-img" />
      <h4>{a.name}</h4>
      <p>{a.role}</p>
      <a href={a.linkedin} target="_blank" rel="noreferrer" className="linkedin-wrap">
        <FaLinkedin className="linkedin-icon" />
      </a>
    </div>
  ))}
</div>

{/* ⭐ Alumni Row 2 → 3 centered */}
<div className="alumni-grid-center">
  {alumniSponsors.slice(4).map((a, i) => (
    <div className="alumni-card" key={i + 4}>
      <img src={a.img} alt={a.name} className="alumni-img" />
      <h4>{a.name}</h4>
      <p>{a.role}</p>
      <a href={a.linkedin} target="_blank" rel="noreferrer" className="linkedin-wrap">
        <FaLinkedin className="linkedin-icon" />
      </a>
    </div>
  ))}
</div>


        {/* BUTTON → Scrolls to Contact Section */}
        <div className="text-center" style={{ marginTop: 24 }}>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
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
