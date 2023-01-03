import React from "react";
import "./CardBlog.css";
import ButtonTwo from "../ButtonTwo/ButtonTwo";

function CardBlog({ name, title, text }) {
  return (
      <div className="ourLatestBlog-box">
        <h2>{name}</h2>
        <span>{title}</span>
        <p>{text}</p>
        <ButtonTwo title="شروع کن"/>
      </div>
  );
}

export default CardBlog;
