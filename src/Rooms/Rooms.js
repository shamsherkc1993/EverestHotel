import React from "react";
import "./Rooms.css";
import RoomsImage from "../ImagesFolder/Rooms/Rooms.jpg";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-7 roomscol7">
          <div className="RoomParaContent">
            <div className="room-content">
              <h3>Interior</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                similique in alias nemo quas asperiores! Soluta ipsa quidem
                voluptas repellat?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident nesciunt sapiente neque aut quia eaque ab, corporis
                facilis assumenda perspiciatis vel sed earum tempore! Ad
                consequatur vitae laboriosam quaerat cupiditate.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus aspernatur soluta minima! Aliquam dolore iure illo
                totam sed distinctio quaerat eveniet perferendis, incidunt
                aspernatur. Nam.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="rooms-para-content">
            <h3>Rooms</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              porro aut nisi corrupti debitis aperiam architecto voluptates
              iusto, earum in?
            </p>
            <h3>Amenities</h3>
            <p className="lastpara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              voluptatem eum a totam qui! Enim velit vitae facere tempore unde
              dolorem ipsam, eius perferendis ea, repellendus tenetur fugit
              autem? Velit!
            </p>
            <Link to="/contact">Find Out More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
