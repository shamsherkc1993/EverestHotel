import React, { useContext } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import ABoutImage from "../ImagesFolder/AboutImage/aboutImage.jpg";
import { HomeContents } from "../index";

const About = () => {
  const NewAboutContent = useContext(HomeContents);
  const title = NewAboutContent[0].section;
  const paraOne = NewAboutContent[0].paragraphOne;
  const paraTwo = NewAboutContent[0].paragraphTwo;
  const paraThree = NewAboutContent[0].paragraphThree;

  return (
    <>
      <div className="main">
        <div className="container-fluid">
          <div className="row about-row">
            <div className="col-sm-7">
              <div className="content">
                <h3>{title}</h3>
                <p>{paraOne}</p>
                <p>{paraTwo}</p>
                <p className="lastpara">{paraThree}</p>
                <Link to="/contact">Book Now</Link>
              </div>
            </div>
            <div className="col-sm-5">
              <img src={ABoutImage} alt="about-image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
