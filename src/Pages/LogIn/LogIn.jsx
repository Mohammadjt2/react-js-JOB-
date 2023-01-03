import React from "react";
import "./LogIn.css";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Button from "../../Components/Button/Button";
import ButtonTwo from "../../Components/ButtonTwo/ButtonTwo";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div className="login">
      <div className="login-form">
        <form action="#">
          <h2>لطفا اطلاعات خود را وارد کنید</h2>
          <h5>ایمیل و پسورد خود را وارد کنید</h5>
          <div className="login-form-input">
            <input placeholder="نام کاربری" type="text" />
            <input placeholder="رمز عبور" type="password" />
          </div>
          <div className="login-form-login">
            <Button title="ورود" />
            <div className="login-form-checkbox">
              <input type="checkbox" />
              <label htmlFor="#">مرا به خاطر بسپار</label>
            </div>
          </div>
          <div className="login-form-amnesia">
            <LockOpenIcon />
            <a href="#">فراموشی رمز عبور</a>
          </div>
          <div className="login-form-login">
            <span>ورود با :</span>
            <div className="login-form-socialNetworks">
              <TwitterIcon className="login-form-TwitterIcon" />
              <InstagramIcon className="login-form-InstagramIcon" />
              <LinkedInIcon className="login-form-LinkedInIcon" />
              <GoogleIcon className="login-form-GoogleIcon" />
              <FacebookIcon className="login-form-FacebookIcon" />
            </div>
          </div>
          <div className="login-form-register">
            <Link to="/Register">
              <ButtonTwo title="ایجاد حساب کاربری" />
            </Link>
            <Link to="/">
              <span>صفحه اصلی</span>
            </Link>
          </div>
        </form>
      </div>
      <div className="login-img">
        <img src="./../../../images/background/bg6.jpg" alt="background" />
      </div>
    </div>
  );
}

export default LogIn;
