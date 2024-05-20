import React, { useContext } from "react";
import { FooterLinks, FooterDetail } from "../index";
import "./Footer.css";
import { Link } from "react-router-dom";
import footerImg from "../ImagesFolder/Logo/logo.png";

const Footer = () => {
  const AllFooterLinks = useContext(FooterLinks);
  const AllFooterDetails = useContext(FooterDetail);
  console.log(AllFooterDetails);
  const email = AllFooterDetails[0].email;
  const phone = AllFooterDetails[0].phone;
  const location = AllFooterDetails[0].location;
  const maplocation = AllFooterDetails[0].mapLocation;

  return (
    <div>
      <div className="container-fluid footer-container">
        <div className="row">
          <div className="col-sm-2">
            <ul>
              {AllFooterLinks.map((val) => {
                return (
                  <>
                    <li>
                      <Link>{val.linkName}</Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="col-sm-2">
            <div>
              <p>{email}</p>
              <p>{phone}</p>
              <p>Follow Us </p>
              <p>{location}</p>
            </div>
          </div>
          <div className="col-sm-4">
            <iframe src={maplocation}></iframe>
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
