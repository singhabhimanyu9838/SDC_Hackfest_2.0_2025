import { useState } from "react";
import "./FAQ.css"; // <-- make sure this file exists

const faqData = [
  {
    q: "What is a hackathon?",
    a: "A hackathon is an invention marathon where tech enthusiasts come together to build projects, learn, and collaborate."
  },
  {
    q: "How big a team can be?",
    a: "The minimum team size is 2 and the maximum team size is 4."
  },
  {
    q: "Who all can participate?",
    a: "Only students can participate. You will be required to show your student ID card."
  },
  {
    q: "Do I need specific qualifications?",
    a: "No qualifications are required. If you love to code, you're welcome!"
  },
  {
    q: "I'm not from REC Banda. Can I participate?",
    a: "Sorry, participation is restricted to REC Banda students only."
  },
  {
    q: "I am a newbie, can I hack?",
    a: "Yes! Mentors will help you throughout the event."
  },
  {
    q: "Is there any registration fee?",
    a: "No, Hackfest 2.0 is completely free."
  },
  {
    q: "Can I start working before the hackathon?",
    a: "No. You may research but coding must start only after the event begins."
  },
  {
    q: "Does Hackfest provide Internet?",
    a: "Bring your own hotspot. The team will provide limited connections."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <h3 className="section-title">Frequently Asked Questions</h3>

        <div className="faq-container">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "active" : ""}`}
              onClick={() => toggle(index)}
            >
              <div className="faq-question">
                {item.q}
                <span className="arrow">{openIndex === index ? "−" : "+"}</span>
              </div>

              <div
                className="faq-answer"
                style={{
                  maxHeight: openIndex === index ? "200px" : "0px",
                }}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
