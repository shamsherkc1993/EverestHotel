import React, { useContext } from "react";
import "./Rooms.css";
import { Link } from "react-router-dom";
import { HomeContents } from "../index";

const Rooms = () => {
  const NewRoomDetails = useContext(HomeContents);
  const title = NewRoomDetails[1].sectionThree;
  const para1 = NewRoomDetails[1].para1;
  const para2 = NewRoomDetails[1].para2;
  const para3 = NewRoomDetails[1].para3;
  const maintitle = NewRoomDetails[1].section;
  const roomPara1 = NewRoomDetails[1].paragraphOne;
  const secondTitle = NewRoomDetails[1].sectionTwo;
  const roomPara2 = NewRoomDetails[1].paragraphTwo;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-7 roomscol7">
          <div className="RoomParaContent">
            <div className="room-content">
              <h3>{title}</h3>
              <p>{para1}</p>
              <p>{para2}</p>
              <p>{para3}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="rooms-para-content">
            <h3>{maintitle}</h3>
            <p>{roomPara1}</p>
            <h3>{secondTitle}</h3>
            <p className="lastpara">{roomPara2}</p>
            <Link to="/contact">Find Out More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
