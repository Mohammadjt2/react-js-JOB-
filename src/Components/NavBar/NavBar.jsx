import React from "react";
import "./NavBar.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">
        <img src="/images/log-white.png" className="navBar-img" alt="logo" />
      </Link>
      <ul className="navBar-ul">
        <Link to="/">
          <li className="navBar-li">صفحه اصلی</li>
        </Link>
        <li className="navBar-li">کارجویان</li>
        <li className="navBar-li">کارفرما</li>
        <li className="navBar-li">بلاگ</li>
        <li className="navBar-li">درباره ما</li>
      </ul>
      <div className="navBar-button">
        <Link to="/LogIn">
          <Button title="ورود" />
        </Link>
        <Link to="/Register">
          <Button title="ثبت نام" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
