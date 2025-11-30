// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="pb100 pt25"
      style={{ background: "#040709" }}
    >
      <div className="container">
        <div className="row">
          <div className="contact">
            <div className="col-md-12">
              <div className="contact-card">
                <h3>CONTACT US</h3>
                <div className="row">
                  <div className="col-md-4">
                    <div className="contact-content">
                      <span>
                        <i className="fas fa-tty" />
                      </span>
                      <br />
                      <h4>Jiwanshu Kumar</h4>
                      <h5>
                        <a href="tel:+918172866134">+91 81728 66134</a>
                      </h5>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="contact-content">
                      <span>
                        <i className="fas fa-envelope-open-text" />
                      </span>
                      <br />
                      <br />
                      <h5>
                       <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sdc2021recbanda@gmail.com" target="_blank">
  sdc2021recbanda@gmail.com
</a>


                      </h5>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="contact-content">
                      <span>
                        <i className="fas fa-tty" />
                      </span>
                      <br />
                      <h4>Hrishabh Gupta</h4>
                      <h5>
                        <a href="tel:+916389497599">+91 63894 97599</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
