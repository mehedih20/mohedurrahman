import React from "react";
import Typewriter from "typewriter-effect";
import "./Banner.css";
import bannerUser from "../../image/banner/mohedur.webp";

const Banner = () => {
  return (
    <div className="banner" id="banner">
      <div className="banner-content">
        <div className="banner-user-img">
          <img src={bannerUser} alt="banner-user-img" />
        </div>
        <div className="banner-text">
          <p>
            <span>Owner</span> , Mehedi Engineering Workshop
          </p>
          <h1>
            <span>Mohedur</span> Rahman
          </h1>
          <h3>
            <Typewriter
              options={{
                strings: ["Mechanical Mechanic...", "At your service !"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
