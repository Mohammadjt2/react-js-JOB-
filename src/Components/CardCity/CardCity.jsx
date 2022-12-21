import React from "react";
import "./CardCity.css";

function CardCity({ src, city, job }) {
  return (
    <div className="cardCity">
      <img src={src} className="cardCity-img" alt="" />
      <h2 className="cardCity-title">{city}</h2>
      <span className="cardCity-text">{job}</span>
      <div className="cardCity-background"></div>
    </div>
  );
}

export default CardCity;
