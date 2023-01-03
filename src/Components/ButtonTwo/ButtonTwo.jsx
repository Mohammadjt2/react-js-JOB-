import React from "react";
import "./ButtonTwo.css";

function Button(props) {
  return (
    <>
      <button className="ButtonTwo">{props.title}</button>
    </>
  );
}

export default Button;
