import React, { useContext } from "react";
import "./SwimmingPool.css";
import swimingimage from "../ImagesFolder/SwimmingPool/swimmingpool.jpg";
import { Link } from "react-router-dom";
import { HomeContents } from "../index";

const SwimmingPool = () => {
  const NewSwimmingPoolDetails = useContext(HomeContents);
  const titleSwimmingPool = NewSwimmingPoolDetails[2].section;
  const swimmingPara = NewSwimmingPoolDetails[2].paragraphOne;
  const yogaTerraceTitle = NewSwimmingPoolDetails[2].sectionTwo;
  const yogaTerracePara = NewSwimmingPoolDetails[2].paragraphTwo;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-7">
          <div className="poll-text-content">
            <h3>{titleSwimmingPool}</h3>
            <p>{swimmingPara}</p>
            <h3>{yogaTerraceTitle}</h3>
            <p className="lastpara">{yogaTerracePara}</p>
            <Link to="/contact" className="pool-para-content padding-2rem">
              Find Out More
            </Link>
          </div>
        </div>
        <div className="col-sm-5 pool-image-section">
          <img src={swimingimage} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default SwimmingPool;
