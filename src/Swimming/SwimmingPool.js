import React from "react";
import "./SwimmingPool.css";
import swimingimage from "../ImagesFolder/SwimmingPool/swimmingpool.jpg";
import { Link } from "react-router-dom";

const SwimmingPool = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-7">
          <div className="poll-text-content">
            <h3>Swimming Pool</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              officia reiciendis mollitia quae nobis obcaecati eos neque cum sed
              commodi quam optio veniam consequuntur nemo, amet itaque, delectus
              hic ad. Ea veritatis adipisci labore, itaque modi consequatur
              debitis libero delectus.
            </p>
            <h3>Yoga Terrace</h3>
            <p className="lastpara">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              pariatur ut perferendis est reprehenderit reiciendis molestias hic
              earum vel, accusamus beatae quis ullam inventore esse laboriosam
              ipsam deleniti rerum. Molestias modi, inventore necessitatibus
              unde possimus voluptatem vel dolor veniam tempora! Quod repellat
              mollitia eligendi eius quidem accusantium at commodi rerum?
            </p>
            <Link to="/contact" className="pool-para-content padding-2rem">
              Find Out More
            </Link>
          </div>
        </div>
        <div className="col-sm-5 pool-image-section">
          <img src={swimingimage} alt="" className="img-fluid" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iusto
            excepturi corrupti non esse officia? Commodi, voluptate! Pariatur,
            deserunt deleniti!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwimmingPool;
