import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
import { SideNav } from "./SideNav";
import { useState } from "react";
import { navData } from "./NavData";

const Navbar = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-content">
          <div className="nav-left">
            <p>
              <span>Mohedur</span> Rahman
            </p>
            <button
              className="nav-btn"
              onClick={() => setSideNavOpen(!sideNavOpen)}
            >
              <GiHamburgerMenu />
            </button>
          </div>
          <div className="nav-right">
            {navData.map((item, index) => {
              const { title, target } = item;
              return (
                <Link key={index} spy={true} smooth={true} to={target}>
                  {title}
                </Link>
              );
            })}
          </div>
        </div>
        <button className="floating-btn" onClick={scrollToTop}>
          <AiOutlineArrowUp />
        </button>
      </div>
      <SideNav navToggle={sideNavOpen} setNavToggle={setSideNavOpen} />
    </>
  );
};

export default Navbar;
