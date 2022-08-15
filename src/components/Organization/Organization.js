import React from "react";
import { IoArrowUndoOutline } from "react-icons/io5";
import orgLogo from "../../image/org/Mehedi.gif";
import "./Organization.css";

const Organization = () => {
  return (
    <div className="section-org" id="organization">
      <h2 className="section-title color-white">Organization</h2>
      <div className="section-container">
        <div className="org-container">
          <div className="org-left">
            <ul>
              <li>
                Machine disassembly and repair <IoArrowUndoOutline />
              </li>
              <li>
                Servicing <IoArrowUndoOutline />
              </li>
              <li>
                Sell spare parts <IoArrowUndoOutline />
              </li>
              <li>
                Buy and sell printing machines <IoArrowUndoOutline />
              </li>
            </ul>
          </div>
          <div className="org-right">
            <div className="org-logo">
              <img src={orgLogo} alt="org-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organization;
