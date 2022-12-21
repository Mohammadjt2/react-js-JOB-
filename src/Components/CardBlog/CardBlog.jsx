import React from "react";
import "./CardBlog.css";
import Button from "../Button/Button";

function CardBlog({ name, title, text }) {
  return (
      <div className="ourLatestBlog-box">
        <h2>{name}</h2>
        <span>{title}</span>
        <p>{text}</p>
        <Button title="شروع کن"/>
      </div>
  );
}

export default CardBlog;
