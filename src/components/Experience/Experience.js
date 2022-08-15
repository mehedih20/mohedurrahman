import React from "react";
import machineLogo from "../../image/machine-logo.webp";
import "./Experience.css";

const expData = [
  "Heidelberg MO",
  "Heidelberg MoE",
  "Heidelberg Speedmaster",
  "Heidelberg Sork",
  "Hashimoto Offset",
  "Others",
];

const Experience = () => {
  return (
    <div className="section-experience" id="experience">
      <h2 className="section-title color-black">Experience</h2>
      <div className="section-container">
        <p className="experience-text color-grey">
          The offset printing machine I have most expertise
        </p>
        <div className="experience-container">
          {expData.map((item, index) => {
            return (
              <div className="experience-box" key={index}>
                <div className="experience-img">
                  <img src={machineLogo} alt="machine-logo" />
                </div>
                <h4>{item}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
