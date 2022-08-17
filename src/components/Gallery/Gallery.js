import React from "react";
import Slider from "react-slick";
import img1 from "../../image/gallery/img1.webp";
import img2 from "../../image/gallery/img2.webp";
import img3 from "../../image/gallery/img3.webp";
import img4 from "../../image/gallery/img4.webp";
import img5 from "../../image/gallery/img5.webp";
import img6 from "../../image/gallery/img6.webp";
import img7 from "../../image/gallery/img7.webp";
import img8 from "../../image/gallery/img8.webp";
import "./Gallery.css";

const images = [img4, img3, img1, img2, img5, img6, img7, img8];

const Gallery = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="section-gallery" id="gallery">
      <h2 className="section-title color-white">Gallery</h2>
      <p className="gallery-text color-grey">Some photos during my work</p>
      <div className="section-container">
        <Slider {...settings}>
          {images.map((item, index) => {
            return (
              <div key={index} className="gallery-img">
                <img src={item} alt="img1" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
