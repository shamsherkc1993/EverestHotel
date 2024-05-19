import React from "react";
import "./HomePage.css";
import Header from "../Header/Header";
import bannerVider from "../ImagesFolder/Video/videoBanner.mp4";
import About from "../About/About";
import Rooms from "../Rooms/Rooms";
import SwimmingPool from "../Swimming/SwimmingPool";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <>
      <section className="Homesection">
        <video src={bannerVider} autoPlay loop muted />
        <Header />
        <div className="banner-info">
          <h3>Enjoy Your Stay</h3>
          <h3>At Hotel Everest</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            dicta itaque repudiandae voluptatum quo blanditiis, asperiores quae
            fugiat dolor distinctio laborum. Odit saepe eius modi nemo provident
            magnam dolor veritatis?
          </p>
        </div>
        <About />
        <Rooms />
        <SwimmingPool />
        <Gallery />
        <Footer />
      </section>
    </>
  );
};

export default HomePage;
