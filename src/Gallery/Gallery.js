import React, { useContext } from "react";
import "./Gallery.css";
import { HomeContents } from "../index";
import Slider from "react-slick";
import image1 from "../ImagesFolder/Gallery/image1.jpeg";
import image2 from "../ImagesFolder/Gallery/image2.jpeg";
import image3 from "../ImagesFolder/Gallery/image3.jpeg";
import image4 from "../ImagesFolder/Gallery/image4.jpeg";
import image5 from "../ImagesFolder/Gallery/image5.jpeg";
import image6 from "../ImagesFolder/Gallery/image6.jpeg";

const Gallery = () => {
  const AllGalleryContent = useContext(HomeContents);
  const title = AllGalleryContent[3].section;
  const quote = AllGalleryContent[3].quote;
  const personName = AllGalleryContent[3].personName;

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
        <h3 className="gallery">{title}</h3>
        <div className="col-sm-7">
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <img src={image1} className="img-fluid" />
                <p className="slider-para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi unde sit doloremque pariatur aspernatur quae
                  eligendi cupiditate earum corrupti provident!
                </p>
              </div>
              <div>
                <img src={image2} className="img-fluid" />
                <p className="slider-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
              <div>
                <img src={image3} className="img-fluid" />
                <p className="slider-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, distinctio!
                </p>
              </div>
              <div>
                <img src={image4} className="img-fluid" />
                <p className="slider-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, distinctio!
                </p>
              </div>
              <div>
                <img src={image5} className="img-fluid" />
                <p className="slider-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, distinctio!
                </p>
              </div>
              <div>
                <img src={image6} className="img-fluid" />
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
            <h3>{quote}</h3>
            <h4>{personName}</h4>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Gallery;
