import React from "react";
import "./About.css";
import aboutImg from "../../image/banner/mohedur.webp";

const About = () => {
  return (
    <div className="section-about" id="about">
      <div className="section-container">
        <h2 className="section-title color-white align-left-25">About</h2>
        <div className="about-container">
          <div className="about-left">
            <div className="about-img">
              <img src={aboutImg} alt="user-img" />
            </div>
            <h2>Mohedur Rahman</h2>
          </div>
          <div className="about-right">
            <p>
              Hello I'm Mohedur Rahman. I am from Dhaka, Bangladesh. I can fix
              various types of offset printing machine by complete
              disassembling. I also sell spare parts of most of the printing
              machines.
            </p>
            <ul>
              <li>Mechanical mechanic</li>
              <li>More than 20 years of experience</li>
              <li>Complete machine disassembly and repairing</li>
              <li>Owner of 'Mehedi Engineering Workshops'</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
