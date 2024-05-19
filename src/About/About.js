import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import ABoutImage from "../ImagesFolder/AboutImage/aboutImage.jpg";

const About = () => {
  return (
    <div className="main">
      <div className="container-fluid">
        <div className="row about-row">
          <div className="col-sm-7">
            <div className="content">
              <h3>About</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus, quae quo! Sint dolore modi, est soluta repellat
                temporibus laudantium culpa reiciendis veniam odio. A adipisci
                repudiandae deleniti dicta dolore vero ratione nulla perferendis
                non recusandae. Quam distinctio deserunt recusandae sint
                eligendi odit eius, nihil dolores rerum similique velit, rem
                quaerat voluptates labore. Exercitationem, repudiandae. Cumque
                nesciunt ab maxime aut a!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sapiente enim voluptates quas blanditiis magni nobis. Nesciunt
                voluptatem iure alias debitis.
              </p>
              <p className="lastpara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                facere deserunt dolorum maiores quae quaerat ea voluptate
                nostrum dolor esse ullam enim obcaecati quos soluta pariatur
                doloremque, quis quia adipisci ratione nihil hic vero itaque
                non. Sint asperiores unde, excepturi provident iure deleniti
                soluta, voluptatem corrupti illum neque ipsa fugit, nemo facere
                similique est! Cum, odio. Dolore expedita repellat rerum
                voluptatem iste fugit. Quam magni soluta, voluptates obcaecati
                eum exercitationem.
              </p>
              <Link to="/contact">Book Now</Link>
            </div>
          </div>
          <div className="col-sm-5">
            <img src={ABoutImage} alt="about-image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
