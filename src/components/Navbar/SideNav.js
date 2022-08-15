import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-scroll";
import { navData } from "./NavData";
import "./Navbar.css";

export const SideNav = ({ navToggle, setNavToggle }) => {
  return (
    <div className={`side-nav ${navToggle && "translate-0"}`}>
      <button className="sidenav-btn" onClick={() => setNavToggle(!navToggle)}>
        <AiFillCloseCircle />
      </button>
      <div className="sidenav-links">
        {navData.map((item, index) => {
          const { title, target } = item;
          return (
            <Link
              key={index}
              spy={true}
              smooth={true}
              to={target}
              onClick={() => setNavToggle(!navToggle)}
            >
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
