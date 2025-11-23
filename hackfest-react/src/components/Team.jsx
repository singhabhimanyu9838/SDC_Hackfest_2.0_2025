// src/components/Team.jsx
import React from "react";
import "./Team.css";
import { FaLinkedin } from "react-icons/fa";

const crew = [
  {
    name: "Abhimanyu Singh",
    role: "SDC Website Manager",
    img: "/assets/img/team/coordinators/Abhimanyu.PNG",
    linkedin: "https://www.linkedin.com/in/abhimanyu-singh-95a55s/",
  },
  {
    name: "Anas Khan",
    role: "Graphic Designer Lead",
    img: "/assets/img/team/coordinators/Anas.png",
    linkedin: "https://www.linkedin.com/in/anaskhan02/",
  },
  {
    name: "Nitin Kumar Singh",
    role: "CP Lead",
    img: "/assets/img/team/coordinators/nitin.jpg",
    linkedin: "https://www.linkedin.com/in/nitin-kumar-singh-a29464205/",
  },
  {
    name: "Anivesh Tyagi",
    role: "Data science Lead",
    img: "/assets/img/team/coordinators/Anivesh.png",
    linkedin: "https://www.linkedin.com/in/aniveshtyagi/",
  },
  {
    name: "Sejal Pal",
    role: "Web Dev Lead",
    img: "/assets/img/team/coordinators/Sejal.png",
    linkedin: "https://www.linkedin.com/in/sejalpal/",
  },
  {
    name: "Sakshi Singh",
    role: "AI/ML Lead",
    img: "/assets/img/team/coordinators/Sakshi.png",
    linkedin: "https://www.linkedin.com/in/sakshi-singh-4883922a5/",
  },
  {
    name: "Kshitij Rastogi",
    role: "UI/UX Lead",
    img: "/assets/img/team/coordinators/kshitij.jpg",
    linkedin: "https://www.linkedin.com/in/kshitij-rastogi-4648a6295/",
  },
];

const mentors = [
  {
    name: "Jiwanshu Kumar",
    role: "DSA Head",
    img: "/assets/img/team/jiwanshu.jpg",
    linkedin: "https://www.linkedin.com/in/jiwanshu-%E2%80%8E-9b848725a/",
  },
  {
    name: "Nihal Jaiswal",
    role: "Machine Learning Head",
    img: "/assets/img/team/nihal.jpg",
    linkedin: "https://www.linkedin.com/in/nihal-jaiswal-908b52257/",
  },
  {
    name: "Prajjwal Srivastava",
    role: "DSA Head",
    img: "/assets/img/team/prajwal.jpg",
    linkedin: "https://www.linkedin.com/in/prajjwalsri/",
  },
  {
    name: "Deepak Kanujiya",
    role: "Social Media & Marketing Head",
    img: "/assets/img/team/deepak.jpg",
    linkedin: "https://www.linkedin.com/in/deepak-kanoujiya-927b4b257/",
  },
  {
    name: "Anchal Chaurasiya",
    role: "Website Manager",
    img: "/assets/img/team/anchal.jpg",
    linkedin: "https://www.linkedin.com/in/anchal-chaurasiya-693b53257/",
  },
  {
    name: "Aman Sharma",
    role: "Graphics Designer Head",
    img: "/assets/img/team/aman.jpg",
    linkedin: "https://www.linkedin.com/in/aman-sharma-a8bb00257/",
  },
  {
    name: "Hrishabh Gupta",
    role: "CP Head(Java)",
    img: "/assets/img/team/Hrishabh.jpg",
    linkedin: "https://www.linkedin.com/in/hrishabh-gupta-50442821a/",
  },
  {
    name: "Aditya Singh",
    role: "Web Developer Head",
    img: "/assets/img/team/aditya.jpg",
    linkedin: "https://www.linkedin.com/in/aditya-singh-03bb48257/",
  },
];

// ⭐ NEW Faculty Section
const faculty = [
  {
    name: "Dr. Vibhash Yadav Sir",
    role: "Faculty Coordinator",
    img: "/assets/img/team/faculty/fac1.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Mr. Abhijeet Singh Sir",
    role: "Faculty Coordinator",
    img: "/assets/img/team/faculty/fac2.jpg",
    linkedin: "https://linkedin.com",
  },
];

const Card = ({ person }) => (
  <div className="team-card tilt">
    <img src={person.img} alt={person.name} className="team-img" />

    <h2>{person.name}</h2>
    <h5>{person.role}</h5>

    <a href={person.linkedin} target="_blank" rel="noreferrer" className="linkedin-wrap">
      <FaLinkedin className="linkedin-icon" />
    </a>
  </div>
);

const Team = () => {
  return (
    <section id="teams" className="pb100 pt100">
      <div className="container">
        <div className="section_title">
          <h3 className="title-dark" data-aos="fade-right">
            Meet The Crew
          </h3>
        </div>

        {/* TEAM */}
        <div className="section_title">
          <h4 className="title-dark clr-white">Team</h4>
        </div>

        <div className="team-grid" data-aos="fade-up">
          {crew.map((p) => (
            <Card key={p.name} person={p} />
          ))}
        </div>

        {/* MENTORS */}
        <div className="section_title" style={{ marginTop: 40 }}>
          <h4 className="title-dark clr-white">Mentors</h4>
        </div>

        <div className="team-grid" data-aos="fade-up">
          {mentors.map((p) => (
            <Card key={p.name} person={p} />
          ))}
        </div>

        {/* ⭐ FACULTY SECTION */}
        <div className="section_title" style={{ marginTop: 40 }}>
          <h4 className="title-dark clr-white">Faculty Coordinators</h4>
        </div>

        <div
          className="faculty-grid"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          {faculty.map((p) => (
            <Card key={p.name} person={p} className="faculty-card" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
