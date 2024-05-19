import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import footerImg from "../ImagesFolder/Logo/logo.png";

const Footer = () => {
  const mapURL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8330566915333!2d139.76451597585427!3d35.6811124299804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2sTokyo%20Station!5e0!3m2!1sen!2sjp!4v1716103876658!5m2!1sen!2sjp";
  return (
    <div>
      <div className="container-fluid footer-container">
        <div className="row">
          <div className="col-sm-2">
            <ul>
              <li>
                <Link>Information</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
              <li>
                <Link>Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-2">
            <div>
              <p>shamsher.kc.c4@gmail.com</p>
              <p>+080-9876-0987</p>
              <p>Follow Us </p>
              <p>Tokyo, Japan</p>
            </div>
          </div>
          <div className="col-sm-4">
            <iframe src={mapURL}></iframe>
          </div>
          <div className="col-sm-4">
            <div className="footer-right">
              <img src={footerImg} />
              <p>Copyright @ 2024 Shamsherkc</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
