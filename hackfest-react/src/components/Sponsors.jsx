import React from "react";
import "./Sponsers.css";
import { FaLinkedin } from "react-icons/fa";

const Sponsors = () => {
  // ⭐ MAIN SPONSORS
  const row1 = [
    { img: "/assets/img/sponsors/spon2.jpg", url: "https://www.matiks.in/" },
    { img: "/assets/img/sponsors/spon3.jpg", url: "https://bilvaleaf.com/" },
    { img: "/assets/img/sponsors/spon4.jpg", url: "https://www.namespace.world/" },
  ];

  const row2 = [
    { img: "/assets/img/sponsors/spon7.png", url: "https://company4.com" },
    { img: "/assets/img/sponsors/spon6.jpg", url: "https://ezsync.in/" },
  ];

  // ⭐ ALUMNI SPONSORS (8 Members → 4 + 4)
  const alumniSponsors = [
    { name: "Ayush Gupta", role: "Alumni Sponsor", img: "/assets/img/sponsors/ayush.jpg", linkedin: "https://www.linkedin.com/in/ayush-gupta-5a8058227/" },
    { name: "Piyush Sahu", role: "Alumni Sponsor", img: "/assets/img/sponsors/piyush.jpg", linkedin: "https://www.linkedin.com/in/piyush-sahu-546382227/" },
    { name: "Himanshu Sahu", role: "Alumni Sponsor", img: "/assets/img/sponsors/himanshu.jpg", linkedin: "https://www.linkedin.com/in/himanshu-sahu75/overlay/photo" },
    { name: "Manas Verma", role: "Alumni Sponsor", img: "/assets/img/sponsors/manas.jpg", linkedin: "https://www.linkedin.com/in/manas-verma-0000ba227/" },

    { name: "Akansha Pal", role: "Alumni Sponsor", img: "/assets/img/sponsors/akansha.jpg", linkedin: "https://www.linkedin.com/in/akanksha-pal-0380a7227/" },
    { name: "Arpan Bhadoria", role: "Alumni Sponsor", img: "/assets/img/sponsors/arpan.jpg", linkedin: "https://www.linkedin.com/in/arpan-singh-bhadauria-271b55207/" },
    { name: "Shekhar Mishra", role: "Alumni Sponsor", img: "/assets/img/sponsors/shekhar.jpg", linkedin: "https://www.linkedin.com/in/shekharmishraa/" },
    { name: "Abhinay Yadav", role: "Alumni Sponsor", img: "/assets/img/sponsors/abhinav.png", linkedin: "https://www.linkedin.com/in/abhinay01/" },
  ];

  return (
    <section className="pt100 pb100" id="sponsors">
      <div className="container">

        {/* ⭐ Section Title */}
        <div className="section_title">
          <h3 className="title-dark" data-aos="fade-right" data-aos-duration="1000">
            Our Sponsors
          </h3>
        </div>

        {/* ⭐ SPONSOR ROW 1 — 3 items */}
        <div className="sponsor-row row-3">
          {row1.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-link"
            >
              <div className="sponsor-card">
                <img src={item.img} alt={`Sponsor ${i + 1}`} />
              </div>
            </a>
          ))}
        </div>

        {/* ⭐ SPONSOR ROW 2 — 2 items */}
        <div className="sponsor-row row-2">
          {row2.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-link"
            >
              <div className="sponsor-card">
                <img src={item.img} alt={`Sponsor ${i + 4}`} />
              </div>
            </a>
          ))}
        </div>

        {/* ⭐ ALUMNI SPONSORS TITLE */}
        <div className="section_title" style={{ marginTop: 60 }}>
          <h3 className="title-dark" data-aos="fade-right">
            Alumni Sponsors
          </h3>
        </div>

        {/* ⭐ Alumni Row 1 → 4 Cards */}
        <div className="alumni-grid">
          {alumniSponsors.slice(0, 4).map((a, i) => (
            <a
              key={i}
              href={a.linkedin}
              target="_blank"
              rel="noreferrer"
              className="alumni-card-link"
            >
              <div className="alumni-card">
                <img src={a.img} alt={a.name} className="alumni-img" />
                <h4>{a.name}</h4>
                <p>{a.role}</p>
                <FaLinkedin className="linkedin-icon" />
              </div>
            </a>
          ))}
        </div>

        {/* ⭐ Alumni Row 2 → 4 Cards (Centered) */}
        <div className="alumni-grid-center">
          {alumniSponsors.slice(4).map((a, i) => (
            <a
              key={i + 4}
              href={a.linkedin}
              target="_blank"
              rel="noreferrer"
              className="alumni-card-link"
            >
              <div className="alumni-card">
                <img src={a.img} alt={a.name} className="alumni-img" />
                <h4>{a.name}</h4>
                <p>{a.role}</p>
                <FaLinkedin className="linkedin-icon" />
              </div>
            </a>
          ))}
        </div>

        {/* ⭐ BUTTON */}
        <div className="text-center custom-btn-wrapper">
          <a
            href="https://forms.gle/px75HWj88NePPwas8"
            target="_blank"
            rel="noopener noreferrer"
            className="pirate-btn"
          >
            Sponsor Us ⚔️
          </a>
        </div>

      </div>
    </section>
  );
};

export default Sponsors;
