import React from "react";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Navbar from "./components/Navbar/Navbar";
import Organization from "./components/Organization/Organization";
import Why from "./components/Why/Why";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Organization />
      <Experience />
      <Gallery />
      <Why />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
