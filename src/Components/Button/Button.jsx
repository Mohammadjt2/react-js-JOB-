import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <>
    <button className="button">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.title}
    </button>
    </>
  );
}

export default Button;
