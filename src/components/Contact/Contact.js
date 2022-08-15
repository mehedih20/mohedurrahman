import React from "react";
import map from "../../image/map.webp";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="section-contact" id="contact">
      <h2 className="section-title color-black">Contact Me</h2>
      <div className="section-container">
        <div className="contact-container">
          <div className="contact-left">
            <form onSubmit={handleSubmit}>
              <input type="text" required placeholder="Name" />
              <input type="email" required placeholder="Email" />
              <input type="text" required placeholder="Phone No." />
              <textarea
                required
                cols="15"
                rows="10"
                placeholder="Type here..."
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="contact-right">
            <div className="contact-map">
              <img src={map} alt="map" />
            </div>
            <h2>Address</h2>
            <p>182 Fakirapool Water Tank Road, Dhaka-1000</p>
            <h2>Social</h2>
            <ul className="contact-social">
              <li>
                <span>
                  <FaFacebook className="color-blue" />
                </span>{" "}
                <a
                  href="https://www.facebook.com/mohedur.rahman.357"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mohedur Rahman
                </a>
              </li>
              <li>
                <span>
                  <FiMail className="color-red" />
                </span>{" "}
                <a href="mailto:moheduren@gmail.com">moheduren@gmail.com</a>
              </li>
              <li>
                <span>
                  <FaWhatsapp className="color-green" />
                </span>{" "}
                +8801711004901
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
