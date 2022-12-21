import React from "react";
import "./Card.css";


function Card({icon,link,text}) {
  return (
    <div>
      <div className="card">
        <div className="card-icon">
          {icon}
        </div>
        <div>
          <a href="#">{link}</a>
        </div>
        <div>
          <span>{text}</span>
        </div>
        <div className="card-background"><img src="/images/categories-bg-dark.png" alt="logo-card" /></div>
      </div>
    </div>
  );
}

export default Card;
