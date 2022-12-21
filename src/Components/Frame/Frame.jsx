import React from "react";
import "./Frame.css";
import Button from "../Button/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

function Frame({src,title,city,time,date,amount}) {
  return (
    <div className="ourJob-right-frame">
      <div className="ourJob-right-frame-right">
        <div className="ourJob-right-frame-right-job">
          <img src={src} alt="logo" />
          <div className="ourJob-right-frame-right-job-text">
            <h3 className="ourJob-right-frame-right-job-title">{title}</h3>
            <div className="ourJob-right-frame-right-job-address">
              <div>
                <LocationOnIcon />
                <span>{city}</span>
              </div>
              <div>
                <BookmarkBorderIcon />
                <span>{time}</span>
              </div>
              <div>
                <QueryBuilderIcon />
                <span>{date}</span>
              </div>
            </div>
          </div>
        </div>
        <Button title="تمام وقت" />
      </div>
      <div className="ourJob-right-frame-left">
        <span className="ourJob-right-frame-left-icon">
          <FavoriteBorderIcon />
        </span>
        <span className="ourJob-right-frame-left-text">{amount}</span>
      </div>
    </div>
  );
}

export default Frame;
