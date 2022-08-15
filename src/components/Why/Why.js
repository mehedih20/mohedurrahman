import React from "react";
import { whyData } from "./whyData";
import "./Why.css";

const Why = () => {
  return (
    <div className="section-why" id="why">
      <h2 className="section-title color-white">Why Me?</h2>
      <div className="section-container">
        <div className="why-container">
          {whyData.map((item, index) => {
            const { title, logo } = item;
            return (
              <div className="why-item" key={index}>
                <span className="why-logo">{logo}</span>
                <p>{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Why;
