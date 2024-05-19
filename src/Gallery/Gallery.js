import React from "react";
import "./Gallery.css";
import Slider from "react-slick";
import image1 from "../ImagesFolder/Rooms/Rooms.jpg";
import image2 from "../ImagesFolder/Rooms/hotelRoom.jpg";

const Gallery = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <h3 className="gallery">Gallery</h3>
        <div className="col-sm-7">
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <img src={image1} className="img-fluid" />
                <p className="slider-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt magni repellat iste ex ipsam aliquam.
                </p>
              </div>
              <div>
                <img src={image2} className="img-fluid" />
                <p className="slider-para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi unde sit doloremque pariatur aspernatur quae
                  eligendi cupiditate earum corrupti provident!
                </p>
              </div>
              <div>
                <img src={image1} className="img-fluid" />
                <p className="slider-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
              <div>
                <img src={image2} className="img-fluid" />
                <p className="slider-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, distinctio!
                </p>
              </div>
            </Slider>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="com-5content">
            <h3>"Visit, Stay and Enjoy"</h3>
            <h4>Thomas</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
