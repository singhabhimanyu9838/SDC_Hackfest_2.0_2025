// src/components/Schedule.jsx
import React from "react";

const Schedule = () => {
  return (
    <section className="pb100 pt100" id="schedule">
      <div className="container">
        <div className="section_title mb50">
          <h3 className="title clr-white">Event Schedule</h3>
        </div>
      </div>
      <img
        src="/assets/img/new_assets/Schedule mobile.svg"
        alt="schedule"
        className="schedule"
      />
      <img
        src="/assets/img/new_assets/Schedule-01.svg"
        alt="schedule"
        className="schedule-laptop"
      />
    </section>
  );
};

export default Schedule;
